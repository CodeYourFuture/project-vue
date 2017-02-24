var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: './../src/main',
	output: {
		path: path.resolve(__dirname, '../dist'),
		publicPath: 'http://localhost:8080/dist',
		filename: '[name].js',
	},

	module: {
		loaders: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
			{
				test: '/\.js$/',
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/, 
				loader: 'style-loader!css-loader',
			},
			{
				test: /\.(png|jpg|gif)$/, 
				loader: 'url-loader',
				query: {
					limit: 10000,
					name: '/img/[name].[hash:7].[ext]'
				}
			},
		],
	},

	resolve: {
  		alias: {
    		'vue$': 'vue/dist/vue.js'
  		}
	},

	plugins: [
		new webpack.LoaderOptionsPlugin({
			options: {
				vue: {
					loaders: {
						js: 'babel-loader',
					},
			},
         }
       })
	],
}
