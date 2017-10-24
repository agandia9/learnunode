var fs = require('fs')
fs.readdir(process.argv[2],(err, data)=>{
	for (var i = 0; i < data.length; i++) {
		data[i].split('.')[1]==='md' ? console.log(data[i]) : ''
	}
})