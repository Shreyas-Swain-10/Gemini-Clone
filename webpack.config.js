const path = require('path');
const Dotenv = require('webpack-dotenv-plugin');

module.exports = {
  entry: './src/gemini.js', // Adjust the path to your entry file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new Dotenv({
      path: './.env', // Path to your .env file
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
