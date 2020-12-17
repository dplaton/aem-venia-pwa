const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
module.exports = {
    entry: {
        main: './lib/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
    },
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {presets: ['@babel/preset-env', '@babel/preset-react']},
                    },
                ],
            },
            {
                test: /\.graphql$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'graphql-tag/loader',
                    },
                ],
            },
            {
                test: /\.css/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: 'cmp-[folder]__[name]__[local]',
                            },
                        },
                    },
                ],
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'resources',
                            name: '[name].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
    ],
};
