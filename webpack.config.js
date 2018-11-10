const webpack = require('webpack');

module.exports = {
  entry: {
    main:'./src/js/main/index.jsx'
  },
  devtool: 'inline-source-map',
  output: {
    path: __dirname+'/dist/',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js','.jsx']
  },
  devServer: {
    contentBase: './dist',
    port: 3535,
    
  },
  module: {
    rules:[
      {
        test: /\.jsx?$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader', 
        options: {
          presets: [
            ['env', {'modules': false}],
            'react'
          ]
        }
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.bmp$/i,
        use: [
          {
            loader: 'url-loader',
            options: {}  
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}