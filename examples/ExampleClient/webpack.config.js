var webpack = require('webpack');
const path = require('path');

module.exports = env => ({
    entry: './server.ts',
    target: 'node',
    mode: 'production',
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname + '/dist')
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: [/node_modules/],
                loader: 'ts-loader'
            },
        ]
    },
});
