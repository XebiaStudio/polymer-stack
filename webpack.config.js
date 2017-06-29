/* eslint-env node */
const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = ({ analyzeBundle, build }) => {
  const minimize = analyzeBundle || build;

  const devtool = minimize ? 'source-maps' : 'eval-source-maps';

  const plugins = [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new CopyWebpackPlugin([
      {
        from: 'images/**',
      },
      {
        from: 'manifest.json',
      },
      {
        from: 'bower_components/webcomponentsjs/*.js',
        flatten: true,
      },
      {
        from: 'service-worker.js',
      },
    ]),
  ];

  if (analyzeBundle) {
    plugins.push(new BundleAnalyzerPlugin());
  }

  if (minimize) {
    plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false,
        },
        output: {
          comments: false, // Also removes licences
        },
      }),
    );
  }

  return {
    entry: './src/my-app.html',
    output: {
      path: path.resolve(__dirname, './build'),
      filename: '[name].[chunkhash:8].js',
      chunkFilename: '[name].[chunkhash:8].js',
    },
    module: {
      loaders: [
        {
          test: require.resolve(
            './bower_components/polymer-redux/dist/polymer-redux.html',
          ),
          use: [{ loader: 'exports-loader', options: 'PolymerRedux' }],
        },
        {
          test: /\.html$/,
          exclude: require.resolve('./index.html'),
          use: [
            { loader: 'babel-loader' },
            {
              loader: 'wc-loader',
              options: {
                minify: minimize,
              },
            },
          ],
        },
        {
          test: /\.(ttf|eot|svg|woff(2)?)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[hash:8].[ext]',
              },
            },
          ],
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          loader: 'file-loader',
          query: {
            name: '[name].[ext]?[hash]',
          },
        },
      ],
    },
    plugins,
    devServer: {
      // serve index.html in place of 404 responses to allow HTML5 history
      historyApiFallback: true,
    },
    devtool,
  };
};
