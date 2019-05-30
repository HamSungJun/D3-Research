const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const glob = require('glob')
const path = require('path')

let JS_Files = glob.sync('./src/js/*.js')
let CSS_Files = glob.sync('./src/css/*.css')
let Total_Files = JS_Files.concat(CSS_Files)

module.exports = {
    entry : [
        '@babel/polyfill',
    ].concat(Total_Files),
    output : {
        path : path.join(__dirname,"bundle"),
        filename : "bundle.js"
    },
    module : {
        rules : [
            {
                test : /\.(css)$/,
                use : [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test : /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use : [
                    'babel-loader'
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'bundle'),
        compress: true,
        port: 9000
    },
    plugins : [
        new CleanWebpackPlugin(),
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            title : "D3 연구소",
        }),
    ],

    devtool : 'source-map',
    mode : 'development'
}