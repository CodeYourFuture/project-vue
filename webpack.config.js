var webpack = require('webpack')

module.exports = {
	entry: './src/main',
	output: {
		path: './build',
		filename: 'main.js',
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
					name: 'build/image/[name].[hash:7].[ext]'
				}
			},
		],
	},

	resolve: {
  		alias: {
    		'vue$': 'vue/dist/vue.common.js'
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
