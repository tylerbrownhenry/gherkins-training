const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, './src/script.js'),
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'script.js',
  },
};