const express = require('express');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
const customerRouter = require('./customer');
global.config = require('./config');

var app = express();
app.use(bodyParser.json());
app.use('/customer', customerRouter);


app.post('/login' , (req , res) => {
    var  userdata = {
            username: req.body.username,
            password: req.body.password
        };
    
        if (userdata.username === "sheiblu" && userdata.password === "123456") {
          
            let token = jwt.sign(userdata, global.config.secretKey, {
                algorithm: global.config.algorithm,
                expiresIn: '1m'
             });

             global.config.token = token;

            res.status(200).json({
            message: 'Login Successful',
            jwtoken: token
            });

        } else {
                res.status(401).json({
                message: 'Login Failed'
            });
        }
 });


 app.listen(3000, () => {
    console.log("Server is running");
    
 });