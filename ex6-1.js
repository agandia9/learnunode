var myFilter = require('./ex6.js')
myFilter(process.argv[2], 'md', function(err, data) {
	if (err)
		return console.error("Thre was an error: ", err)
	data.forEach(function(file) {
		console.log(file)
	})
})