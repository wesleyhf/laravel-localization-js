const path = require('path')

module.exports = {
    entry: './src/LaravelLocalization.js',
    mode: 'production',
    output: {
        filename: 'LaravelLocalization.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'LaravelLocalization',
        globalObject: 'this',
        libraryExport: 'default',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    },
}
