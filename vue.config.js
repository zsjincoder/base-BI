// vue-cli参考教程：https://cli.vuejs.org/zh/config/
const path = require('path');
const resolve = dir => path.join(__dirname, dir);

module.exports = {
    // 取消线上环境打包时候eslint检查
    lintOnSave: process.env.NODE_ENV !== 'production',
    // 在htmlWebpackPlugin中增加环境变量，在index.html中使用
    chainWebpack: config => {
        config.plugin('html').tap(args => {
            args[0].title = '渝叶连锁直营终端数据中心';
            args[0].environment = process.env.NODE_ENV;
            return args;
        });
        // 添加别名
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@assets', resolve('src/assets'))
            .set('@components', resolve('src/components'));
        // 设置svg loader
        config.module
            .rule('svg')
            .exclude.add(resolve('src/assets/svg'))
            .end();
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/assets/svg'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end();
    },
    productionSourceMap: false,
    devServer: {
        port: 3000,
        open: true,
        proxy: {
            '/api-local': {
                target: 'http://192.168.2.28:8091/api/',
                progress: true,
                pathRewrite: {
                    '^/api-local': '/'
                }
            }
        }
    },
    assetsDir: 'assets',
    publicPath: './' // 当使用基于 HTML5 history.pushState 的路由时不能使用相对路径
};
