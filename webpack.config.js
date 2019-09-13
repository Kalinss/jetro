const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const imagesConfig = require('./webpackConfig/imagesConfig');
const pugConfig = require('./webpackConfig/pugConfig');
const styleConfig = require('./webpackConfig/styleConfig');
const fontsConfig = require('./webpackConfig/fontsConfig');
const jsConfig = require('./webpackConfig/jsConfig');

module.exports = {
    devtool: (process.env.NODE_ENV === 'development') ? 'source-map' : false,
    entry: "./webpackConfig/webpackConfig.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    devServer: {
        host: '192.168.56.1'
    },
    module: {
        rules: [
            ...pugConfig,
            ...imagesConfig,
            ...styleConfig.loader,
            ...fontsConfig,
            ...jsConfig

        ]
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     filename: 'tester.html',
        //     template: 'src/html/pages/tester.pug',
        //     minify: false
        // }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/html/pages/index.pug',
            minify: false
        }),
        new HtmlWebpackPlugin({
            filename: 'ui.html',
            template: 'src/html/pages/UImap.pug',
            minify: false
        }),
        new HtmlWebpackPlugin({
            filename: 'portf.html',
            template: 'src/html/pages/portfolio.pug',
            minify: false
        }),
        new webpack.ProvidePlugin({
            $: "jquery/dist/jquery.min.js",
            jQuery: "jquery/dist/jquery.min.js",
            "window.jQuery": "jquery/dist/jquery.min.js"
        }),

        new MiniCssExtractPlugin(styleConfig.pluginConf),

    ]
};
