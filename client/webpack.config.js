const path = require('path');

module.exports = {
  "mode": "development",
  "devServer": {
    "publicPath": "/build/"
  },
  "entry": './src/index.js',
  "output": {
    "filename": 'webpack-bundle.js',
    "path": path.resolve(__dirname, 'build'),
  },
  "module": {
    "rules": [
      {
        "test": /\.(js|jsx)$/,
        "exclude": /node_modules/,
        "use": {
          "loader": "babel-loader",
          "options": {
            "presets": [
              "env",
              "react"
            ]
          }
        }
      },
      {
        "test": /\.css$/,
        "use": [
          "style-loader",
          "css-loader"
        ]
      }
    ]
  }
}