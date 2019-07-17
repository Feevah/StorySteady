var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res){

	// REQUEST STUFF

	var reqUrl = url.parse(req.url);
	reqUrl = reqUrl.path;





	// RESPONSE STUFF

	// res.setHeader('Content-Type', 'text/HTML');
	// res.statusCode = 200;

	res.writeHead(200, {
		'Content-Type': 'text/HTML'
	});

	if (reqUrl === '/about'){
		res.write("<h2>about me</h2>")
		res.write("<a href='/'>&larr; To home page</a>")

	} else {
		res.write("<h2>Hello World!</h2>")
		res.write("<a href='/about'>&rarr; To about page</a>")
	}

	res.write("Hello World!")
	res.end()
});


server.listen(8080, function(){
	console.log ("listening on Port 8080")

	});
