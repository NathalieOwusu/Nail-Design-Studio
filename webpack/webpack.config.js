const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "..", "./src/index.jsx"), // Entry point for the app
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"], // File extensions to resolve
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/, // Handle .js, .jsx, .ts, .tsx
        exclude: /node_modules/, // Ignore node_modules
        use: [
          {
            loader: "babel-loader", // Transpile files with Babel
          },
        ],
      },
      {
        test: /\.css$/, // Handle .css files
        use: ["style-loader", "css-loader"], // Inject CSS into DOM and resolve imports
      },
      {
        test: /\.scss$/, // Handle .scss files
        use: ["style-loader", "css-loader", "sass-loader"], // Process SCSS into CSS
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/i, // Handle image files
        type: "asset/resource", // Copy files to output directory
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg)$/, // Handle font and SVG files
        type: "asset/inline", // Inline files as base64 URIs
      },
      {
        test: /\.html$/i, // Handle .html files
        use: ["html-loader"], // Export HTML as a string
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "..", "./build"), // Output directory
    filename: "bundle.js", // Output file name
  },
  mode: "development", // Set mode to development
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "./src/index.html"), // Use this HTML as a template
    }),
  ],
};
