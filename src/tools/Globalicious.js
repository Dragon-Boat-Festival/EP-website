import { select } from 'd3-selection'
import { drag } from 'd3-drag'
import { json } from 'd3-fetch'
import { timer } from 'd3-timer'
import { geoGraticule, geoOrthographic, geoPath } from 'd3-geo'
import * as topojson from 'topojson'

const d3 = {
  select,
  get event() {
    return event
  },
  drag,
  json,
  timer,
  geoGraticule,
  geoOrthographic,
  geoPath,
}

/**
 * 后面的操作需要这个 画图
 * @type {DOMParser}
 */
const parser = new DOMParser()

/**
 *
 * t 值 [0, 1] => [0, 1]
 * https://gist.github.com/gre/1650294
 * @param  {Float} power [0, 1]
 * @return {Float} [0, 1]
 */
const easeIn = function(power) {
  return function(t) {
    return Math.pow(t, power)
  }
}
const easeOut = function(power) {
  return function(t) {
    return 1 - Math.abs(Math.pow(t - 1, power))
  }
}
const easeInOut = function(power) {
  return function(t) {
    return t < 0.5
      ? easeIn(power)(t * 2) / 2
      : easeOut(power)(t * 2 - 1) / 2 + 0.5
  }
}
const Easing = {
  linear: easeInOut(1),
  easeIn: easeIn(2),
  easeOut: easeOut(2),
  easeInOut: easeInOut(2),
  easeInCubic: easeIn(3),
  easeOutCubic: easeOut(3),
  easeInOutCubic: easeInOut(3),
  easeInQuart: easeIn(4),
  easeOutQuart: easeOut(4),
  easeInOutQuart: easeInOut(4),
  easeInQuint: easeIn(5),
  easeOutQuint: easeOut(5),
  easeInOutQuint: easeInOut(5),
}

const Globalicious = function(wrapper, options) {
  const self = this

  // defaults
  this.options = {
    speed: 1,
    incline: -15,
    startingRotation: 0,
    outline: '#000',
    land: '#222',
    sea: '#fff',
    borders: '#fff',
    gridOver: 'rgba(119, 119, 119, 0.5)',
    gridUnder: false,
    data: '/data/world-110m.json',
    goToDuration: 800,
    goToEasing: 'easeOut',
  }

  // 合并选项
  for (const attrName in options) {
    console.log(attrName)
    /* if (options.hasOwnPropdderty(attrName)) {
             this.options[attrName] = options[attrName];
         }*/
  }

  // 验证 wrapper 是否是个元素类型，否则提前返回，停止代码执行
  if (!wrapper.tagName) {
    console.warn('Globalicious: `wrapper` is not an Element')
    return
  }

  this.width = parseInt(window.getComputedStyle(wrapper).width, 10)
  this.height = this.width
  this.speed = this.options.speed
  this.incline = this.options.incline
  this.start = Date.now()
  this.paused = 0
  this.rotationX = this.rotationXCache = this.options.startingRotation
  this.goto = false

  this.sphere = { type: 'Sphere' }
  this.land = null
  this.borders = null
  this.grid = null
  this.markers = []

  const marginAside = 20
  const marginTop = 30

  // 投影类型： orthographic
  // 并定义一些基本设置。scale（）确定缩放比例
  //
  this.projection = d3
    .geoOrthographic()
    .scale((this.width - marginAside * 2) / 2)
    .translate([this.width / 2, (this.height + marginTop) / 2])
    .clipAngle(90)
    .precision(0.5)

  // 分划 平行线和子午线
  this.graticule = d3.geoGraticule()

  // other than setting our canvas' dimensions, we define the drag
  // 绘画 尺寸和 缓冲的设置
  this.canvas = d3.select(wrapper).append('canvas')

  const canvasEl = this.canvas.node()
  const canvasScale = window.devicePixelRatio // 在屏幕上更改为1以查看模糊的画布。

  // 操作 canvas 上下文
  this.context = canvasEl.getContext('2d')

  // 设置画布显示大小（css像素），然后设置实际大小
  //
  canvasEl.style.width = this.width + 'px'
  canvasEl.style.height = this.height + 'px'
  canvasEl.width = this.width * canvasScale
  canvasEl.height = this.height * canvasScale
  this.context.scale(canvasScale, canvasScale)

  // path 是路径，它将 GeoJSON 转换为可用的、
  // SVG路径字符串，添加到上下文
  // 操作画布上下文呢
  this.path = d3
    .geoPath()
    .projection(this.projection)
    .context(this.context)

  // 使用pointPath来确定标记是否仍在可见区域上
  this.pointPath = d3
    .geoPath()
    .projection(this.projection)
    .pointRadius(function(/* d */) {
      return 6
    })

  //使用 svg进行绘制
  this.svg = d3
    .select(wrapper)
    .append('svg')
    .attr('width', this.width)
    .attr('height', this.height)
    .attr('style', 'position: absolute; top: 0; left: 0')
    .call(
      d3
        .drag()
        .subject(function() {
          return {
            x: self.rotationX * 2,
            y: -self.incline * 2,
          }
        })
        .on('start', function() {
          self.paused |= 1 // 4 > 5; 5 > 5; 1 > 1; 0 > 1
        })
        .on('drag', function() {
          self.rotationX = d3.event.x / 2
          self.incline = -d3.event.y / 2
          self.rotate(self.rotationX, self.incline)
        })
        .on('end', function() {
          self.paused &= -2 // 5 > 4; 4 > 4; 1 > 0; 0 > 0
          self.start = Date.now()
          self.rotationXCache = self.rotationX
        })
    )
    .append('g')

  this.svg
    .append('rect')
    .attr('class', 'glbl-overlay')
    .attr('width', this.width)
    .attr('height', this.height)
    .attr('fill', 'transparent')
  console.log(this.options.data)
  d3.json(
    'https://raw.githubusercontent.com/huaungwj/img_storage/main/world.json'
  )
    .then(function jsonData(topo) {
      console.log('123')
      self.land = topojson.feature(topo, topo.objects.land)
      self.borders = topojson.mesh(topo, topo.objects.countries, function(
        a,
        b
      ) {
        return a !== b
      })
      self.grid = self.graticule()

      // 至少执行一次
      self.rotate(self.rotationX, self.incline)

      d3.timer(function rotate() {
        if (self.goto) {
          const long = -self.goto.long
          const lat = -self.goto.lat
          const distanceX = (self.rotationXCache % 360) - long
          const distanceY = (self.incline % 360) - lat
          const elapsed = (Date.now() - self.start) / self.options.goToDuration // [0, 1]
          if (elapsed < 1) {
            const rotationX =
              self.rotationXCache -
              Easing[self.options.goToEasing](elapsed) * distanceX
            const rotationY =
              self.incline -
              Easing[self.options.goToEasing](elapsed) * distanceY
            self.rotate(rotationX, rotationY)
          } else {
            self.rotate(long, lat)
            self.rotationXCache = self.rotationX = long
            self.incline = lat
            if (typeof self.goto.callback === 'function') self.goto.callback()
            self.goto = false
          }
        } else if (self.speed) {
          if (self.paused) return

          const speed = self.speed * 1e-2
          self.rotationX =
            self.rotationXCache + speed * (Date.now() - self.start)
          self.rotate(self.rotationX, self.incline)
        }
      })
    })
    .catch((error) => console.error('Globalicious: ' + error))

  this.rotate = function(long, lat) {
    this.projection.rotate([long, lat])

    this.context.clearRect(0, 0, this.width, this.height)

    // 球体
    /* if (this.options.outline) {
             this.context.beginPath();
             this.path(this.sphere);
             this.context.lineWidth = Math.round(this.width * 2) / 300;
             this.context.strokeStyle = this.options.outline;
             this.context.stroke();
         }*/

    // 海洋
    /* if (this.options.sea) {
             this.context.beginPath();
             this.path(this.sphere);
             this.context.fillStyle = this.options.sea;
             this.context.fill();
         }*/

    // 网格
    /*if (this.options.gridUnder) {
            // this.context.beginPath();
            // this.path(this.grid);
            // this.context.lineWidth = 0.5;
            // this.context.strokeStyle = this.options.gridUnder;
            // this.context.stroke();
        }*/

    // 边框
    /* if (this.options.borders) {
             this.context.beginPath();
             this.path(this.borders);
             // this.context.lineWidth = 0.5;
             // this.context.strokeStyle = this.options.borders;
             this.context.stroke();
         }*/

    // 土地
    if (this.options.land) {
      this.context.beginPath()
      this.path(this.land)
      const opacity = 0.1
      const grd = this.context.createRadialGradient(200, 0, 170, 400, 0, 170)
      grd.addColorStop(0.5, 'rgba(255,255,255,' + 0.7 + ')')
      grd.addColorStop(0.1, 'rgba(255,255,255,' + opacity + ')')
      this.context.fillStyle = grd
      this.context.fill()
    }

    // 网格覆盖
    /* if (this.options.gridOver) {
             // this.context.beginPath();
             // this.path(this.grid);
             // this.context.lineWidth = 0.5;
             // this.context.strokeStyle = this.options.gridOver;
             // this.context.stroke();
         }*/

    this.svg
      .selectAll('g.glbl-marker')
      .attr('transform', function(datum /* , index */) {
        const proj = self.projection([datum[0], datum[1]])
        return 'translate(' + proj[0] + ',' + proj[1] + ')'
      })
      .classed('is-hidden', function(datum /* , index */) {
        return (
          self.pointPath({
            type: 'Point',
            coordinates: [datum[0], datum[1]],
          }) === null
        )
      })
  }
}

// API
Globalicious.prototype.pause = function() {
  this.paused |= 4 // 0 > 4; 1 > 5; 4 > 4; 5 > 5
  this.rotationXCache = this.rotationX
}

Globalicious.prototype.play = function() {
  this.paused &= -5 // 4 > 0; 5 > 1; 0 > 0; 1 > 1
  this.start = Date.now()
}

Globalicious.prototype.setSpeed = function(speed) {
  this.rotationXCache = this.rotationX
  this.start = Date.now()
  this.speed = parseInt(speed, 10)
}

Globalicious.prototype.goTo = function(lat, long, callback) {
  this.pause()
  this.rotationXCache = this.rotationX
  this.start = Date.now()
  this.goto = {
    lat: lat,
    long: long,
    callback: callback,
  }
}

Globalicious.prototype.mark = function(lat, long, shape, onClick) {
  const self = this

  // 旋转
  this.markers.push([long, lat, shape])

  this.svg
    .selectAll('g.glbl-marker')
    .data(this.markers)
    .enter()
    .append('g')
    .attr('class', 'glbl-marker')
    .attr('id', function(datum /* , index */) {
      const transLat = datum[1].toString().replace('.', '♥')
      const transLong = datum[0].toString().replace('.', '♥')
      return 'glbl-marker_' + transLat + '_' + transLong
    })
    .each(function(datum /* , index */) {
      const g = d3.select(this).append('g')
      const xml = parser.parseFromString(datum[2], 'image/svg+xml')
      const importedNode = document.importNode(xml.documentElement, true)
      importedNode.setAttribute('x', -(importedNode.getAttribute('width') / 2))
      importedNode.setAttribute('y', -importedNode.getAttribute('height'))
      g.node().appendChild(importedNode)
    })
    .attr('transform', function(datum /* , index */) {
      const proj = self.projection([datum[0], datum[1]])
      return 'translate(' + proj[0] + ',' + proj[1] + ')'
    })
    .on('click', function() {
      if (typeof onClick === 'function') {
        onClick.call(this, lat, long)
      }
    })
}

export default Globalicious
