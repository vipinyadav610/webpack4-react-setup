const webpack = require('webpack')
module.exports = {
  entry: ['react-hot-loader/patch', './src/client/index.js'],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: ['./dist', './public'],
    historyApiFallback: true,
    // host: "0.0.0.0",
    port: 3000,
    hot: true
    // https: true,
    // open: true
    // progress: true
    // watchContentBase: true
  }
}
