/**
 * Created by Peter on 2016/12/23.
 */
'use strict';

var cloudoll = require('cloudoll');
var serve    = require('koa-static');


var blockFavicon = function *(next) {
    if (this.url.match(/favicon\.ico$/)) {
        // console.log('favicon......');
        this.body = "";
        return;
    }
    yield next;

};


var middles = [
    blockFavicon
];

console.log(process.env.debug);


if (process.env.debug) {
    console.log("热加载启动");
    const path = require('path');
    //const Make = require("react-admin-lte").Make;
    const webpack = require("webpack");
    const devPath = path.resolve('./dev');

    // var mm = new Make({
    //     devMode: true,
    //     devPath: devPath,
    //     buildPath: __dirname,
    //     libAlias: {
    //         AdminLTE: path.join(devPath, 'res/lib/AdminLTE'),
    //         bootstrap: path.join(devPath, 'res/lib/bootstrap')
    //     }
    // });

    //var webpackConf = require('./config/webpack.dev');
    var webpackConf = require('./webpack.config.js');

    //let webpackConf = mm.createWebpackConfig();

    // webpackConf.resolveLoader = {
    //     root: path.join(__dirname, 'node_modules')
    // };

    var compiler = webpack(webpackConf);

    var webpackDevMiddleware = require("koa-webpack-dev-middleware")(compiler, {
        hot: true,
        noInfo: false,
        publicPath: webpackConf.output.publicPath,
        headers: { "X-Custom-Header": "yes" },
        stats: {
            colors: true
        }
    });
    middles.push(webpackDevMiddleware);

    var hotMiddleware = require('koa-webpack-hot-middleware')(compiler);
    middles.push(hotMiddleware);
} else {
    // 生产模式下，这部分内容会被 nginx 代理，所以这个中间件是多余的。
    middles.push(serve('./dist'));
}

var app = new cloudoll.KoaApplication({
    middles: middles
});