/**
 * Created by edesimone on 12/12/17.
 */
//const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    },
                    {
                        loader: "sass-loader" // compiles Sass to CSS
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        //new CleanWebpackPlugin(['dist'])
        //         new HtmlWebpackPlugin({
        //         title: 'Output Management'
        // })
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ],

    // plugins: [
    //     new webpack.optimize.UglifyJsPlugin(),
    //     new webpack.ProvidePlugin({
    //         $: 'jquery',
    //         jQuery: 'jquery',
    //         'window.jQuery': 'jquery',
    //         Popper: ['popper.js', 'default']
    //         // // In case you imported plugins individually, you must also require them here:
    //         // Util: "exports-loader?Util!bootstrap/js/dist/util",
    //         // Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
    //         // ...
    //     }),
    //     new HtmlWebpackPlugin({template: './src/index.html'}),
    //
    // ]
};