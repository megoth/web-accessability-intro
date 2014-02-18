var express = require('express');
var app = express();
var port = process.env.PORT || 5000;

app.configure(function () {
	app.use("/", express.static(__dirname));
}).listen(port);
console.log("Express server running on http://localhost:" + port);