//const { request } = require("http");
const path = require("path");
const HTMLWebpackPlugin=require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');


module.exports={
    context: path.resolve(__dirname,'src'),
    mode: 'development',
    entry:{
        main: './index.js'
    },
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin(),
        new ESLintPlugin()
    ],
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    }
}