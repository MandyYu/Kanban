var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
   
    entry: __dirname + "/app/app.js",
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: "json-loader"//应该是json-loader
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test:/\.css$/,
                loader: 'style-loader!css-loader?modules'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"
        })
    ],
    devServer: {
        contentBase: "./public",
        stats: { colors: true },
        historyApiFallback: true,
        inline: true,
        
    }
}