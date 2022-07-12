const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'none',
    entry: {
        app: path.join(__dirname, 'src', 'index.tsx')
    },
    target: 'web',
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.css?$/,
                use: ["style-loader", "css-loader"],
                exclude: '/node_modules/'
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }
        ],
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    devServer: {
        port: 9000,
        static: './dist',
        historyApiFallback: true,
        proxy: {
            '/battleship': 'http://localhost:9090',
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Battleship',
            template: 'public/index.html',
            favicon: 'public/bootje.png',
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],
}
