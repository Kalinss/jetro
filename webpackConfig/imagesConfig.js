const options = {
    limit: 8192,
    fallback: 'file-loader',
    name: 'images/[hash].[ext]'
};
const mimetypes = {
    jpg: 'image/jpeg',
    png: 'image/png',
    gif: 'image/gif',
    svg: 'image/svg+xml'
};

const config = [ // сжимаем -> мелкие кодируем -> большие в папку
    {
        test: /\.(jpe?g)$/i,
        use: [
            {
                loader: 'url-loader',
                options: {
                    ...options,
                    mimetype: mimetypes.jpg
                },
            },
            {
                loader: 'image-webpack-loader',
            }
        ]
    },
    {
        test: /\.(png)$/i,
        use: [
            {
                loader: 'url-loader',
                options: {
                    ...options,
                    mimetype: mimetypes.png
                },
            },
            {
                loader: 'image-webpack-loader',
            }
        ]
    },
    {
        test: /\.(gif)$/i,
        use: [
            {
                loader: 'url-loader',
                options: {
                    ...options,
                    mimetype: mimetypes.gif
                },
            },
            {
                loader: 'image-webpack-loader',
            }
        ]
    },
];
module.exports = config;