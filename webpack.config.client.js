const webpack = require('webpack')
const path = require('path')
const fs = require('fs')
const DEV = process.env.NODE_ENV !== 'production'
const dotenv = require('dotenv-webpack')
const WebpackDevServerUrl = 'http://localhost:3002'

const TerserPlugin = require('terser-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const publicPath = (DEV) ? `${WebpackDevServerUrl}/dist/` : '/';

const getPlugins = (isDev) => {
    let plugins = [
        new webpack.HashedModuleIdsPlugin(),
    ]

    let devPlugins = [
        new dotenv()
    ]

    let prodPlugins = [
        new ManifestPlugin({
            fileName: 'asset-manifest.json',
            publicPath: publicPath,
        }),
    ]

    plugins = plugins.concat((isDev) ? devPlugins: prodPlugins);

    return plugins;
}

module.exports = {
    // bail: !DEV,
    devtool: DEV ? 'cheap-module-source-map' : 'source-map',
    mode: (DEV) ? 'development' : 'production',
    target: 'web',
    entry: [
        "@babel/polyfill", 
        "isomorphic-fetch/fetch-npm-browserify",
        './src/client/main.js',
    ],
    output: {
        path: path.resolve('dist'),
        publicPath: publicPath,
        filename: 'bundle.js',
        filename: '[name].js',
        chunkFilename: (DEV) ? '[name].js' : '[name].[chunkhash:8].js'
    },
    optimization: {
        minimize: !DEV,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    parse: {
                        ecma: 8,
                    },
                    compress: {
                        ecma: 5,
                        warnings: false,
                        comparisons: false,
                        inline: 2,
                    },
                    mangle: {
                        safari10: true,
                    },
                    output: {
                        ecma: 5,
                        comments: false,
                        ascii_only: true,
                    },
                },
                parallel: true,
                cache: true,
                sourceMap: false,
            })
        ],
        splitChunks: (DEV) ? false : {
            chunks: 'all',
            name: false,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name(module) {
                        const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                        return `npm.${packageName.replace('@', '')}`;
                    },
                },
            },
        },
        runtimeChunk: true,
    },
    module: {
        rules: [
            {
                oneOf: [
                    {
                        test: /\.js$/,
                        exclude: /(node_modules)/,
                        loader: 'babel-loader',
                    },
                    {
                        test: /\.(js|mjs)$/,
                        exclude: /@babel(?:\/|\\{1,2})runtime/,
                        loader: require.resolve('babel-loader'),
                        options: {
                            babelrc: false,
                            configFile: false,
                            compact: false,
                            presets: [
                            [
                                require.resolve('babel-preset-react-app/dependencies'),
                                { helpers: true },
                            ],
                            ],
                            cacheDirectory: true,
                            cacheCompression: !DEV,
                            
                            sourceMaps: false,
                        }
                    },
                    {
                        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                        loader: 'file-loader', 
                        options: {
                            name: '[hash].[ext]',
                        }
                    }
                ]
            },
        ],
    },
    plugins: getPlugins(DEV),
    node: {
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty',
    },
};