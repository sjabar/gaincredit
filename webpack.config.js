const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const { CleanWebpackPlugin } = require('clean-webpack-plugin');

  module.exports = {
    mode: 'development',
    entry: {
      app: './src/index.js',
    },
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './dist',
 },
 output: {
    filename: '[name].bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
   //  new CleanWebpackPlugin(['dist/*']),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        template: './public/index.html'
      }),
  ],
 module:{
     rules:[
        {
            test: /\.jsx?$/,
            use: {
                loader: "babel-loader",
                query: {
                  presets: [ "es2015", "react"],
                }
              },
            exclude: /node_modules/
        },
        {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              'style-loader',
              // Translates CSS into CommonJS
              'css-loader',
              // Compiles Sass to CSS
              'sass-loader',
            ],
          },
          {
            test: /\.css$/i,
            use: [
              // Creates `style` nodes from JS strings
              'style-loader',
              // Translates CSS into CommonJS
              'css-loader'
            ],
          },
     ]
 },
 devServer: {
    port: 3000,
    historyApiFallback: true

}
   
    
  };