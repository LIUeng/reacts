const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",

  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "/"
  },

  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        use: require.resolve("ts-loader"),
        exclude: /node-modules/
      },
      {
        test: /\.jsx?$/,
        use: require.resolve("babel-loader"),
        exclude: /node-modules/
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      title: "UENG",
      inject: true
    })
  ],

  devServer: {
    port: 1111,
    contentBase: path.resolve(__dirname, "public")
  },

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },

  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  }
};
