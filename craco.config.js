const cracoSassResourcesLoader = require('craco-sass-resources-loader')
const path = require('path');

module.exports = {
  plugins: [
		{
			plugin: cracoSassResourcesLoader,
			options: {
				resources: './src/App.scss'
			}
		}
	]
};
