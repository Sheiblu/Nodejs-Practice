const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');


app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));


hbs.registerHelper( "getCurrentYear", () => {
  return new Date().getFullYear();
});


app.get('/', (req, res) => {
  res.render('home.hbs', {
    page_name : "Home",
    welcome_message : "Hello, welcome to myside"
  });
});


app.get('/about', (req, res) => {
  res.render('about.hbs', {
    page_name : "About"
  });
});


// /bad - send back json with errorMessage
app.get('*', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});


app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
