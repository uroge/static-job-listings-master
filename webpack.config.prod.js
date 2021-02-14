const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/script.js',
    output: {
        filename: 'script.js',
        path: path.resolve(__dirname, 'script'),
        publicPath: 'script/'
    },
    devtool: 'cheap-source-map'
};