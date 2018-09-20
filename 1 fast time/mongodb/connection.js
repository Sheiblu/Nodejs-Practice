var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url , function(err , client){
    if (err) throw err;

    console.log("Connection created !");
    var db = client.db("mydb");

    db.createCollection("customers", function( err , res){
        if (err) throw err ;
        console.log("Collection created !");
    });

    var myobj = { name: "Company Inc", address: "Highway 37" };
    db.collection("customers").insert( myobj, function(err , res){
        if (err) throw err ;
        console.log("Data Entry Success");
        client.close();
    });

    console.log("Connection Close ");
});