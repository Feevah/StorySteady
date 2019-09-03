const path = require('path')
const express = require("express");
const db = require("./db.js");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000

const app = express();
// const publicDirectory = path.join(__dirname, '../public')

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(__dirname + "/public"));
// app.use(express.static(publicDirectory));


app.get('/', (req, res) =>{
  db.getCaughtData()
  .then(result => {
    var newArr = [];
    result.forEach(function(obj) {
      newArr.push(obj.posts);
    })
  res.render("home", {data: newArr})})
  .catch(error => res.send("we broke at part 2"));
})

app.post('/new', (req, res) =>{
var newStory = req.body.story
 db.insertCaughtData(newStory)
        .then(result => {res.redirect("/")})
        .catch(error => res.send("We broke"));
})




// Delete database at url /storiesPast


// app.get('/storiesPast', (req, res) => {
//   db.getCaughtData()
//   .then(result => {
//     var newArr = [];
//     result.forEach(function(obj) {
//       newArr.push(obj.posts);
//     })

//     res.send(newArr)})
//   .catch(error => res.send("we broke at part 2"));    
// });




	// 404
app.get('*', (req, res) => {
    res.send("Sorry, the page you requested does not exist.")
})



app.listen(PORT, () => {
	console.log(`Listening on ${ PORT }`)
}) 