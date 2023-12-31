require('dotenv').config()
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: '/index.tsx',
    devtool: 'inline-source-map',
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            title: 'codegy-adminer',
            meta: {viewport: 'width=device-width, initial-scale=1'}
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader", 'postcss-loader'],
            },
            {
                test: /skin\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-url-loader',
                        options: {
                            limit: 10000,
                        },
                    },
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options:{
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    }
                },
            },
        ],
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                tinymceVendor: {
                    test: /[\\/]node_modules[\\/](tinymce)[\\/](.*js|.*skin.css)|[\\/]plugins[\\/]/,
                    name: 'tinymce'
                },
            },
        }
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: '[name].js',
        publicPath: '/',
        path: path.resolve(__dirname, 'public'),
    },
    devServer: {
        static: '/public',
        compress: true,
        port: 9000,
        historyApiFallback: true,
        proxy: {
            "/api/**": { target: process.env.PROXY_TARGET, secure: false },
            "/login": { target: process.env.PROXY_TARGET, secure: false },
            "/refresh": { target: process.env.PROXY_TARGET, secure: false },
        }
    },
    mode: process.env.MODE,
};