const webpack = require('webpack')
const path = require('path')
const externals = require('webpack-node-externals')
const dotenv = require('dotenv-webpack')
const DEV = process.env.NODE_ENV !== 'production'
const WebpackDevServerUrl = 'http://localhost:3002';

const getPlugins = (isDev) => {
    let plugins = []

    let devPlugins = [
        new dotenv()
    ]

    let prodPlugins = []

    plugins = plugins.concat((isDev) ? devPlugins: prodPlugins);

    return plugins;
}

module.exports = {
    devtool: DEV ? 'cheap-module-source-map' : 'source-map',
    mode: (DEV) ? 'development' : 'production',
    entry: ["@babel/polyfill", './src/server/main.js'],
    target: 'node',
    externals: [externals()],
    output: {
        path: path.resolve('dist'),
        publicPath: (DEV) ? `${WebpackDevServerUrl}/dist/` : '/',
        filename: 'server.js',
        libraryTarget: 'commonjs2',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve('src'),
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                },
            },
            {
                test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                loader: 'file-loader',
                options: {
                    name: '[hash].[ext]',
                }
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    plugins: getPlugins(DEV),
}