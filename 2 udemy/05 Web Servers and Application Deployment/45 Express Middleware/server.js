const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const app = express();


app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');



// Mainmaining Time

app.use((req ,res , next) => {
    res.render('maintain.hbs');
});


app.use((req, res, next) => {
    var now = new Date();
    var log = `${now}: Method : ${req.method} , Url :  ${req.url}`;

    console.log(log);
    fs.appendFile('server.log' , log + '\n' , (error) => {
        if(error){
          console.log(' Unable to connect Server ');
        }
    });
    next();
});



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
