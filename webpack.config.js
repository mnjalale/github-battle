/**
 * Created by Martin on 17-Jul-16.
 */
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
})

module.exports = {
    entry:[
        './app/index.js'
    ],
    output:{
        path: __dirname + '/dist',
        filename: "index_bundle.js"
    },
    module: {
        loaders: [
            {test:/\.js$/,exclude:/node_modules/,loader:"babel-loader"}
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
}