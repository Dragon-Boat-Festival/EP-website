import Globalicious from './Globalicious';

function mID(lat, long) {
    return (
        'glbl-marker_' +
        lat.toString().replace('.', '♥') +
        '_' +
        long.toString().replace('.', '♥')
    );
}

document.addEventListener('DOMContentLoaded', function (event) {
    console.log(event)
    const globe = document.getElementById('history-globe');
    if (!globe) return;

    const years = document.querySelectorAll(
        '.section-history .label-swiper .swiper-slide'
    );
    const latitudes = document.querySelectorAll(
        '.section-history .maxi-swiper .swiper-slide[data-latitude]'
    );
    const longitudes = document.querySelectorAll(
        '.section-history .maxi-swiper .swiper-slide[data-longitude]'
    );
    console.log(latitudes)

    if (
        years.length !== latitudes.length ||
        latitudes.length !== longitudes.length
    ) {
        console.warn(
            '无法继续，请提供所有swiper的经度和纬度'
        );
        return;
    }

    /** swiper 容器
     ******************************************************************************************/
    const swiperContainer = document.querySelector(
        '.section-history .maxi-swiper'
    );

    /** 位置 svg
     ******************************************************************************************/
    const pin =
        '<svg viewBox="0 0 24 24" width="40" height="40" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.41"><path fill="#000000" d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" /></svg>';

    /** 建立坐标数组
     ******************************************************************************************/
    const markers = Array.from(latitudes).map(slide => {
        const lat = parseFloat(slide.dataset.latitude.trim());
        const long = parseFloat(slide.dataset.longitude.trim());
        return {
            lat,
            long,
        };
    });

    /** 构建地球模型
     ******************************************************************************************/
    window.Earth = new Globalicious(globe, {
        speed: 0,
        incline: 10,
        startingRotation: -120, // East Asia
        borders: false,
        outline: false,
        sea: false,
        gridOver: false,
        gridUnder: false,
        land: '#000',
        // data: world_vars.templateUrl + '/src/tools/world-110m.json',
        data: '/src/tools/world-110m.json',
        goToDuration: 1000,
        goToEasing: 'easeInOutQuart',
    });

    /** 等待页面加载完，进行渲染位置角标
     ******************************************************************************************/
    window.addEventListener('load', function () {
        if (!swiperContainer.swiper) return;

        /** 在 地球模型 上放置位置角标
         ******************************************************************************************/
        markers.forEach(marker => {
            window.Earth.mark(marker.lat, marker.long, pin);
        });

        /** 保存标记
         ******************************************************************************************/
        const markerEls = document.querySelectorAll('g.glbl-marker');

        /** 转到第一个位置
         ******************************************************************************************/
        window.Earth.goTo(markers[0].lat - 60, markers[0].long);
        if (document.getElementById(mID(markers[0].lat, markers[0].long))) {
            document
                .getElementById(mID(markers[0].lat, markers[0].long))
                .classList.add('is-current');
        }

        /**  监听 swiper slide 的更改，如果有更改进行 地标 更改
         ******************************************************************************************/
        swiperContainer.swiper.on('slideChange', function () {
            window.Earth.goTo(
                markers[this.activeIndex].lat - 60,
                markers[this.activeIndex].long
            );

            Array.from(markerEls).forEach(function (markerEl) {
                markerEl.classList.remove('is-current');
            });
            if (
                document.getElementById(
                    mID(markers[this.activeIndex].lat, markers[this.activeIndex].long)
                )
            ) {
                document
                    .getElementById(
                        mID(markers[this.activeIndex].lat, markers[this.activeIndex].long)
                    )
                    .classList.add('is-current');
            }
        });
    });
});
