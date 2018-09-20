var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url , function(err, client){
    if (err) throw err;
    console.log("Connection established in Find file");

    var db = client.db("mydb");

    db.collection("customers").find({}).toArray( function (err , res){
        if (err) throw err ;
        console.log("Data found !\n Result: ");
        console.log(res);
    });

    client.close();
    console.log("Connection off !");
});