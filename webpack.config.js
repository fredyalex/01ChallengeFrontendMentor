const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname,'src/index.js'),
    output: {
        path: path.resolve(__dirname,'public/'),
        filename: 'bundle.js',
        assetModuleFilename: 'assets/images/[name][ext]'
    },
    devServer: {
        hot: false,
        static: path.join(__dirname, 'dist'),
        liveReload: true
    },
    resolve : {
        extensions: ['.js','.jsx']
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(js|jsx)$/i,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template/index.html'
        }),
    ],
};