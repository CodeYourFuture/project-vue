var express = require('express')

var app = express();

app.use(express.static('build'));

app.listen(8880, function(err) {
	if(err) {
		console.log(err);
		return;
	}
	console.log('listening at http://localhost:8880');
});