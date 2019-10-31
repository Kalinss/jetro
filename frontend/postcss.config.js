const plugins = [
    require('autoprefixer')({
        browsers: ['ie >= 9', 'last 4 version']
    }),
];
if (process.env.NODE_ENV == 'production') {
    plugins.push(
        require('cssnano')({
            preset: 'default',
        }))
}


module.exports = {
    plugins: plugins
};