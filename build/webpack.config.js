const webpack = require('webpack');
const path = require('path');
const pkg = require('../package.json');
const rootPath = path.resolve(__dirname, '../');

const config = {
  entry: path.resolve(rootPath, 'src', 'index.js'),
  output: {
    filename: `${pkg.name}.min.js`,
    path: path.resolve(rootPath, 'lib'),
    library: `${pkg.name}`,
    libraryTarget: "umd"
  },
  module: {
    rules: [{
        test: /\.js$/,
        loader: "babel-loader"
    }]
  },
};

module.exports = config;