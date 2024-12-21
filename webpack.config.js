// webpack.config.js  
const path = require('path');  
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 引入 HtmlWebpackPlugin  
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 引入 MiniCssExtractPlugin  

module.exports = {  
    mode: 'development',  
    entry: './src/main.js', // 入口文件  
    output: {  
        filename: 'bundle.js', // JS 输出文件  
        path: path.resolve(__dirname, 'dist'), // 输出目录  
        publicPath: '/', // 服务器访问路径  
    },  
    devServer: {  
        static: {  
            directory: path.join(__dirname, 'public'),  
        },  
        compress: true,  
        port: 9000,  
        hot: true,  
        open: true,  
    },  
    module: {  
        rules: [  
            {  
                test: /\.js$/, // 处理 JavaScript 文件  
                exclude: /node_modules/,  
                use: {  
                    loader: 'babel-loader',  
                },  
            },  
            {  
                test: /\.css$/, // 处理 CSS 文件  
                use: [  
                    MiniCssExtractPlugin.loader, // 提取 CSS 到单独的文件  
                    'css-loader' // 解析 CSS 文件  
                ],  
            },  
            {  
                test: /\.less$/, // 处理 LESS 文件  
                use: [  
                    MiniCssExtractPlugin.loader, // 提取 CSS 到单独的文件  
                    'css-loader', // 解析 CSS 文件  
                    'less-loader', // 将 LESS 编译为 CSS  
                ],  
            },  
        ],  
    },  
    plugins: [  
        new HtmlWebpackPlugin({  
            template: path.resolve(__dirname, 'public', 'index.html'), // 指定模板文件  
            filename: 'index.html' // 输出文件名  
        }),  
        new MiniCssExtractPlugin({  
            filename: '[name].css', // 输出的 CSS 文件名  
            chunkFilename: '[id].css', // 生成的 chunk CSS 文件名  
        }),  
    ],  
};