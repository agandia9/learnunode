var fs = require('fs')
path = require('path'),
	module.exports = function(arg, extens, callback) {
		fs.readdir(arg, (err, data) => {
			if (err) return callback(err)
			var filteredFiles = data.filter(function(data) {
				return path.extname(data) == '.' + extens
			})

			callback(null, filteredFiles)
		})
	}
