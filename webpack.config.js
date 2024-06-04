const path = require("path");

module.exports = {
  mode: "production",
  entry: "./survey-js-form-card.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "survey-js-form-card.js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["css-loader"],
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        loader: 'lit-css-loader',
        options: {
          specifier: 'lit-element'
        }
      }
    ],
  },
};
