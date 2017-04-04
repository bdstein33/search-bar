const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');

const config = {
	resolve: {
    extensions: ['', '.js', '.jsx']
  },
	entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'babel-polyfill',
		'./src/client.js',
		'./src/scss/main.scss',
		'.src/style.css'
	],
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			// {
			// 	test: /\.scss$/,
			// 	// loaders: ['style', 'css?modules', 'postcss', 'sass']
			// 	// loaders: ['style', 'css', 'postcss-loader', 'sass?sourceMap']
			// 	loaders: ['style-loader', 'css-loader', 'sass-loader']

			// },
			{
        test: /\.css$/,
        loaders: [ 'style-loader', 'css-loader' ]
      },
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ['babel']
			},
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				loaders: ['babel']
			},
			{
				test: /\.html$/,
				loaders: ['html']
			},
			{
				test: /\.json$/,
				loaders: ['json']
			}
		]
	},
	// postcss: function() {
	// 	return [
	// 		require('autoprefixer')
	// 	]
	// },
	// postcss: [
  //   autoprefixer({remove: false, browsers: ['> 1%', 'IE >= 10', 'Firefox >= 37', 'Safari >= 6', 'Android >= 4.0']})
  // ],
  // sassLoader: {
  //   includePaths: [path.resolve(__dirname, 'node_modules/support-for/sass')]
  // },
	plugins: []
}

module.exports = config
