 var net = require('net')
 var returnDate = (date)=>{
 	return date.getFullYear() + '-' + parseInt(date.getMonth()+1) + '-' + date.getDate()+ ' ' + date.getHours()+ ':' + ((date.getMinutes() < 10) ? '0'+date.getMinutes():date.getMinutes());
 		
 }
 var server = net.createServer((socket)=> {
	var date = new Date();
    socket.end(returnDate(date) + '\n');
});

server.listen(Number(process.argv[2]));
