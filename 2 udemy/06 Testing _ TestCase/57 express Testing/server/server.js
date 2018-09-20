const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/users', (req, res) => {
    res.send([{
           name : 'Sheiblu',
           age : 23
       }, {
            name : 'Asif',
            age : 22
       }, {
            name : 'Aman',
            age : 15
       }]);
});


app.get('*', (req, res) => {
    res.status(404)
       .send({
        error : 'Page not found.',
        name : "Server Test"
    });
});

app.listen(3000 , () => {
    console.log('Server is runnning');
})

module.exports.app = app;