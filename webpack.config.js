const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                loader: 'file-loader',
                options: {
                    name: 'img/[name].[ext]',
                    publicPath: '/',
                },
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]',
                    publicPath: '/'
                },
            },
        ],
    },
};