var express = require('express');
const path = require('path'); // Add this line

var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');



app.set("views", path.join(__dirname, "views"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));


// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  res.render('pages/index');
});

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

app.listen(4269);
console.log('Server is listening on port 4269');

