var fs = require('fs');
var steady = require('./storySteady.js')

var storyAdd = steady.newDoDo

fs.writeFile('theStory.txt', storyAdd, function(err, data){
		console.log("we did something")
})  