const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, "src", "index.js"),
    mode: "development",
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: path.resolve(__dirname, 'public') 
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'}
                ]
            },
            {
                test:  /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {loader: 'file-loader'}
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss'],
        alias: {
            modules: __dirname + '/node_modules'
        }
    }
}