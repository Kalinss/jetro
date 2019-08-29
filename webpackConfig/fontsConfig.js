const config = [
    {
        test: /\.(woff(2)?|ttf|eot|otf|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
            name: '[name].[ext]',
            outputPath:'fonts/'
        }
    }
];
module.exports = config;