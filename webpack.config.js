const webpack = require("webpack");
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

console.log(path.resolve(__dirname, './src/app'));

module.exports = {

    // folder containing files to process
    context: path.resolve(__dirname, './src'),

    // entry points
    entry: {
        "polyfill": "./polyfill",
        "vendor": "./vendor",
        "app": "./main"
    },

    /**
     * Output is served from here
     */
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: "./dist/[name].bundle.js"
    },

    // Extensions to look for when implicit `import` is encountered
    resolve: {
        extensions: ['.ts', '.js']
    },

    // enable source map
    devtool: 'source-map',

    // additional module
    module: {
        rules: [

            // typescript : 1/load ts, 2/use template-loader for templateUrl
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader'],
                exclude: /node_modules/
            },

            // html
            {
                test: /\.html$/,
                loader: 'html-loader'
            },

            // component's css, use to-string-loader for angular stylesUrl in components
            {
                test: /\.css$/,
                exclude: path.resolve(__dirname, './src/style'),
                include: path.resolve(__dirname, './src/app'),
                loader: ['to-string-loader','css-loader']
            },

            // src/style.css, ExtractTextPlugin move css to a separate bundle (see below)
            {
                test: /\.css$/,
                include: path.resolve(__dirname, './src/style'),
                exclude: path.resolve(__dirname, './src/app'),
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            }
        ]
    },

    /*
     *   plugins
     */
    plugins: [

        // add <link ..> to index.html
        new ExtractTextPlugin("styles.css"),

        // remove shared dependencies between bundles
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfill']
        }),

        // generate html index with bundled files
        new HtmlWebpackPlugin({
            template: './index.html'
        })],

    // dev server
    devServer: {
        contentBase: path.resolve(__dirname, './dist'), // index is served from src
        historyApiFallback: true // fallback any 404 error to index.html
    }

};