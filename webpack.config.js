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
