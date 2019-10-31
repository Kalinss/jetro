const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PROCESS  = (process.env.NODE_ENV == 'production' || false);
console.log(PROCESS);

const pluginConf = [
    {
        filename: '[hash].css',
        chunkFilename: '[id].css',
    }
];
const loader = [ // MiniCssExtractPlugin
    {
        test: /\.s[ac]ss$/i,
        use: [
            {
                loader: MiniCssExtractPlugin.loader,
                // options: {
                //     hmr: process.env.NODE_ENV === 'development',
                // },
            },
            // 'style-loader',
            {
                loader: 'css-loader',
                options: {
                    sourceMap: PROCESS==='development'|| false // NODE ENV DEV
                }
            },
            {
                loader: 'postcss-loader',

            },
            {
                loader: 'sass-loader',
                options: {
                    sourceMap: PROCESS==='development'|| false  // NODE ENV DEV
                }
            },
        ],
    }
];

module.exports = {
    pluginConf: pluginConf,
    loader: loader
};
