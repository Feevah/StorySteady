
// Shoes Serever


var http = require("http");
var url = require('url');
var fs = require("fs");
const { parse } = require('querystring');
var path = require('path');

const server = http.createServer(function (req, res) {

		var parUrl = url.parse(req.url, true);
		var filePath = '.' + parUrl.pathname;


		console.log(parUrl);

// GET and POST


		if (req.method === 'POST') {


    		var story = '';
    		req.on('data', chunk => {
        		story += chunk.toString();
    		});
    		req.on('end', () => {
        		fs.appendFileSync('story.txt', story)
        		console.log(
            	parse(story)
        		);
        		res.end('ok');
    		});
		}



// Serving pages

		if(parUrl.pathname === ('/')){
			fs.readFile("index.html", function (err, content) {
			res.writeHead(200, { 'Content-Type': "text/html" });
			return res.end(content);
		});
		}

	   else if (parUrl.pathname === ('/Flown.css')){
		fs.readFile("Flown.css", function(err, content){
			res.writeHead(200, {'content-Type': "text/css"});
			res.end(content);
		});
	    }

	    else if (parUrl.pathname === ('/storySteady.js')){
	    fs.readFile("storySteady.js", function(err, content){
	    	res.writeHead(200, {'content-Type': "application/javascript"});
	    	return res.end(content);
	    });
	    }




	
	})
	server.listen(8080, function () {
			console.log("Listening on Port: "+ 8080);
		});
