module.exports = {
    publicPath: '/static/epHome/',
    configureWebpack: {
        resolve: {
            //配置别名
            alias: {
                assets: '@/assets',
                components: '@/components',
                router: '@/router',
                views: '@/views',
            },
        },
    },
}
