const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'button': './src/button.js',
        'logo' : './src/logo.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: ''
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                   loader: 'babel-loader',
                   options: {
                       presets: [ '@babel/env' ],
                       plugins: [ 'transform-class-properties' ]
                   }
                }
            },
            {
                test: /\.hbs$/,
                use: [
                   'handlebars-loader' 
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                '**/*',
                path.join(process.cwd(), 'build/**/*')

            ]
        }),
        new HtmlWebpackPlugin({
            filename: 'button.html',
            chunks: ['button'],
            title: 'Hello World',
            template: 'src/page-template.hbs',
            description: 'Hello world'
        }),
        new HtmlWebpackPlugin({
            filename: 'logo.html',
            chunks: ['logo'],
            title: 'HD Logo',
            template: 'src/page-template.hbs',
            description: 'HD Logo'
        })
    ]
};