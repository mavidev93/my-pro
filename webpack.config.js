const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './sass/main.scss',
    output: {
        //filename: 'sss.css',
        path: path.join(__dirname, '/dist/css')
    },
    devServer: {
        port: 1111,
        contentBase: path.join(__dirname, 'dist')
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            // chunkFilename: '[id].[chunkhash].js'
        }),

    ],

    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    // fallback to style-loader in development
                    process.env.NODE_ENV !== 'production'
                        ? 'style-loader'
                        :
                        MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    }
};