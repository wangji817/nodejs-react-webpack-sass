/*
	作者:night
	时间:2017-11-28
 */
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {    
    entry: [
        'webpack/hot/dev-server',path.resolve(__dirname, './src/index.js')
    ],
    output: {    	
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js'        
    },
    module: {
        rules: [
            {
                test: /\.jsx|\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/,
            },
            {
                test: /\.scss$/,
                loaders: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('index.css'),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ]
};