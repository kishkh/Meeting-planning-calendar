const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OpimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production'
const isDev = !isProd;

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    }
    if(isProd) {
        config.minimizer = [
            new TerserWebpackPlugin(),
            new OpimizeCssAssetsWebpackPlugin()
        ]
    }
    return config
}

const generateHtmlPlugin = (fileName) => {
    return new HTMLWebpackPlugin({
      filename: `${fileName}.html`,
      template: `./src/pages/${fileName.toLowerCase()}.html`,
      minify: {
        collapseWhitespace: isProd
      },
      favicon: './src/favicon.ico',
      chunks: [`${fileName}`]
    });
  };
  
const populateHtmlPlugins = (pagesArray) => {
const res = [];
pagesArray.forEach(page => {
    res.push(generateHtmlPlugin(page));
});
return res;
};

const pages = populateHtmlPlugins(['calendar', 'form']);
const [calendar, form] = pages;

module.exports = {
    mode: 'development',
    entry: {
        calendar: ['@babel/polyfill', './src/scripts/calendar.js'],
        form: ['@babel/polyfill', './src/scripts/form.js']
    },
    
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: optimization(),
    devtool: "source-map",
    plugins: [
        calendar,
        form,
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(sass|scss)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                        }
                }
            }
        ]
    }
};