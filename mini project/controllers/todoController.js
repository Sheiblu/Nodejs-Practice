// var data = [ { item : 'get Milk'} ,
//                 { item : 'get Car'},
//                 { item : 'get Money'},
//                 { item : 'get Mobile'},
//                 { item : 'get A Home'}] ;

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended : false});
var mongoose = require('mongoose');

//connect to database 
mongoose.connect('mongodb://test:test1234@ds235251.mlab.com:35251/todo_sheiblu');


//create schema
var todoSchema = new mongoose.Schema ( {
    item : String
});


//Create Model
var  Todo = mongoose.model('Todo', todoSchema);

//Use For data Add in mLab Menually 
// var itemOne  = Todo({item : 'Buy Car'}).save(function(err){
//     if(err) throw err;
//     console.log('Item is added');
// });


module.exports  = function (app) {


    app.get('/todo' ,  function (req , res){

        // Get Data Form mLob DataBase and Pass to View
        Todo.find({}, function(err, data){
            if (err) throw err; 
            res.render('todo', {data : data});
        });
       //  res.render('todo' , {data : data});
    });

    

    app.post('/todo' , urlencodedParser , function (req , res){
        console.log("Post data is : ", req.body.item);
        //Post for add data Form mLab DataBase
        var addData = Todo(req.body).save(function(err, data){
            if(err) throw err;
            res.json(data);
        });
        // console.log("Post data is : ", req.body.item);
        // data.push(req.body);
        // res.json(data);
    });

 
    app.delete('/todo/:item' ,  function(req , res){
        //Delete data from Form mLab DataBase
        console.log('Come Delete Request : '+ req.params.item);
        
        Todo.find({'item' : req.params.item.replace(/\-/g," ")}).remove((err , data) => {
            if (err) throw err ;
            res.json(data);
        });

        // data = data.filter( function(todo){
        //     return todo.item.replace(/ /g, "-") !== req.params.item ;
    });



};