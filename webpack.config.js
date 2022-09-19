const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
  entry: {
    index: './src/index.js',
    task: './src/task.js',
    storage: './src/storage.js',
    getLocalStorage: './src/getLocalStorage.js',
    displayAllTasks: './src/displayAllTasks.js',
    displayProjects: '/src/displayProjects.js',
    addProject: '/src/addProject.js'

    },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};