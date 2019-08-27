const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const imagesConfig = require('./webpackConfig/imagesConfig');
const pugConfig = require('./webpackConfig/pugConfig');
const styleConfig = require('./webpackConfig/styleConfig');

module.exports = {
    devtool: (process.env.NODE_ENV ==='development')?'source-map':false,
    entry: "./webpackConfig/webpackConfig.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            ...pugConfig,
            ...imagesConfig,
            ...styleConfig.loader
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/html/blocks/index.pug',
            minify: false
        }),
        new MiniCssExtractPlugin(styleConfig.pluginConf)

    ]
};
