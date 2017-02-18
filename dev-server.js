var express = require('express');
var path = require('path');


var app = express();

app.use(express.static(__dirname));

app.listen(8080, function(err) {
	if(err) {
		console.log(err);
		return;
	}
	console.log('listening at http://localhost:8080');
});
