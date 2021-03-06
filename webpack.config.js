const HtmlWebpackPlugin     = require('html-webpack-plugin');
const path                  = require('path');
const Dotenv                = require('dotenv-webpack');
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');
const {InjectManifest}      = require('workbox-webpack-plugin');
const CopyPlugin            = require('copy-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: "/",
    },
    devServer: {
        historyApiFallback:true,

    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader:"babel-loader"
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                use: {
                    loader: 'url-loader',
                },
            },
            {
                test: /\.(s(a|c)ss)$/,
                use: [MiniCssExtractPlugin.loader,
                    "css-loader", "postcss-loader",
                ],
            },
            {
                test: /\.(png|j?g|svg|gif)?$/,
                use: 'file-loader?name=./images/[name].[ext]'
            },
            {
                test: /\.json$/,
                use: 'file-loader?name=./json/[name].[ext]'
            },

        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
            filename: "index.html"
        }),
        new Dotenv({
            path: './.env',
            systemvars:true
        }),
        new CopyPlugin({
            patterns:[
                {from:"./public/manifest.json",to:""},
                {from:"./public/favicon.ico",to:""},
                {from:"./public/logo192.png",to:""},
                {from:"./public/logo512.png",to:""}
            ]
        }),
        new InjectManifest({
            swSrc: path.resolve(__dirname,"./src/src-sw.js"),
            swDest: "sw.js",
        }),
    ]
}