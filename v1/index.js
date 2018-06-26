// require dependencies
var http = require('http');
const port = 8080;

// create request handler
function requestHandler(request, response) {
	console.log(request.url);
	response.end("Hello Node");
}

// start server
var server = http.createServer(requestHandler);

// open port
server.listen(port, function(err){
	if(err)
		throw err;
	console.log('Server is listening on port: ', port);
});
