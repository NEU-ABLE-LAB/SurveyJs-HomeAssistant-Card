// This configuration file is used to set up Webpack for bundling the application
const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/survey-js-form-card.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "survey-js-form-card.js"
  },
  resolve: {
    extensions: [".ts", ".js"], // Automatically resolves imports with these extensions
  },
  module: {
    rules: [ // The rules property defines how different types of modules (files) will be processed
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: "ts-loader", // Uses 'ts-loader' to transpile TypeScript files into JavaScript
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["css-loader"], // Uses 'css-loader' to process and bundle CSS files
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        loader: 'lit-css-loader', // Uses 'lit-css-loader' to process CSS for LitElement components
        options: {
          specifier: 'lit' // Specifies that 'lit' is the framework using this loader
        }
      }
    ]
  }
};