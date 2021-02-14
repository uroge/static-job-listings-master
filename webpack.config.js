const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/script.js',
    output: {
        filename: 'script.js',
        path: path.resolve(__dirname, 'script'),
        publicPath: 'script/'
    },
    devtool: 'cheap-module-eval-source-map'
};