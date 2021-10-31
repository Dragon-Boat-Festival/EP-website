/**
 * 公共工具函数库
 * {*} author
 */

const Tools = {
    /**
     * 背景运动
     * @param elClassName 监听的元素 名称
     */
    backgroundMotion: function (elClassName) {
        const winHeight = window.innerHeight;//窗口高
        const El = document.querySelector(`.${elClassName}`)
        const divHeight = El.offsetHeight // 盒子高度
        const divTop = El.offsetTop;//盒子距离html顶部高度
        // 监听滚动条
        this.prevTop = divTop;
        window.addEventListener('scroll', () => {
            //滚动条滚动高度
            const winTop = document.documentElement.scrollTop;

            if (winTop + winHeight > divTop && winTop < divTop + divHeight) {//判断div是否出现在屏幕

                if (winTop >= this.prevTop) {//滚动条往下

                    El.style.transform = `translate3d(0px, ${window.scrollY * -0.15}px, 0px)`
                } else {//滚动条往上


                    El.style.transform = `translate3d(0px, ${window.scrollY * -0.15}px, 0px)`


                }
                this.prevTop = document.documentElement.scrollTop;
            }
        })
        // console.log(divTop)
    }
}
export default Tools;
