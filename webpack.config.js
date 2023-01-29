const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    output:{
        filename:'index_bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'Book library',
    }),
	new ESLintPlugin(),],
    devtool:'inline-source-map',
    mode: 'development',
    module:{
        rules:[
            {
            test: /\.s[ac]ss$/i,
            use:[
                "style-loader",
                "css-loader",
                "sass-loader",
                ],
            },
            {
                test: /\.css$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
            },
        ],
    },
};