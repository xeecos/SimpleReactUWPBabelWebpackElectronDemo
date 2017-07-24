"use strict";
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [{
    entry: [
        './src/browser/index.jsx',
    ],
    output: {
        path: path.resolve(__dirname, './dist/browser'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [{
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                include: [
                    path.resolve(__dirname, 'src'),
                ],
                exclude: [
                    /node_modules/,
                    "./src/electron"
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.(css|sass)$/,
                loader: 'sass-loader',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.(htm|html)$/,
                loader: 'html-loader',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    target: 'electron',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/templates/template.html',
            inject: false
        }),
        new webpack.DefinePlugin({
            $dirname: '__dirname',
        })
    ]
}, {
    entry: './src/electron/app.js',
    output: {
        path: path.resolve(__dirname, './dist/electron'),
        publicPath: '/dist/',
        filename: 'app.js',
    },
    target: 'electron',
    node: {
        __dirname: false
    },
    module: {
        exprContextCritical: true,
        wrappedContextCritical: true,
        wrappedContextRecursive: true,
        wrappedContextRegExp: /^\.\//,
        exprContextRegExp: /^\.\//,
        unknownContextRegExp: /^\.\//,
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            include: [
                path.resolve(__dirname, 'src/electron-main'),
            ],
            exclude: [
                /node_modules/,
                /extensions/
            ]
        }],
        rules: [{
            test: /\.node$/,
            use: 'node-loader'
        }]
    },
    resolve: {
        modules: [
            path.resolve('./node_modules')
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            $dirname: '__dirname',
        })
    ]
}];