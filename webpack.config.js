const path = require('path');
const webpack = require("webpack");
const webpack_rules = [];
const webpackOption = {
    entry: {
        'bundle.js': [
          path.resolve(__dirname, 'src/index.js')
        ]
      },
    output: {
        filename: '[name]',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: webpack_rules
    }
};
let babelLoader = {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
        loader: "babel-loader",
        options: {
            presets: ["@babel/preset-env"]
        }
    }
};
webpack_rules.push(babelLoader);
module.exports = webpackOption;
