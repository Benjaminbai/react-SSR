const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('./utils')

module.exports = {
    entry: resolve('app/main.js'),
    output: {
        path: resolve('dist'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: resolve('app'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            },
            {
                test: /\.html$/,
                include: resolve('app'),
                loader: 'html-loader'
            },
            {
                test: /\.less$/,
                include: resolve('app'),
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: `url-loader?limit=1000`
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: `file-loader`
            },
        ]
    },
    resolve: {
        alias: {
            '@': resolve('app')
        },
        extensions: ['.js', '.jsx']
    },
    externals: {},
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: resolve('template/app.html')
        })
    ]
}