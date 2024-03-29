const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode:'development',
    entry:'./index.js',
    module:{
        rules:[
            {
                test:/\.m?js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            }
        ]
    },
    devServer: {
        static: {
             directory: path.join(__dirname, ''),
        }
     },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
    ]
}