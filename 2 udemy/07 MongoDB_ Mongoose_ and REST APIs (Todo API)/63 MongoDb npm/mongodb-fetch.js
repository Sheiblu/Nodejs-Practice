const {MongoClient, ObjectID} = require('mongodb');
const dbName = 'TodoApp' ;

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err){
        return console.log('Server not Connect');
    }

    console.log('Connect Succcessfully');

    const db = client.db('TodoApp');

//  Using find for Fetch data

    db.collection('Todos').find({
        _id : new ObjectID('5b6980e40611500fa4fcd8ae') 
    }).toArray().then((docs) => {

        console.log('Data Found from Todos');
        console.log(JSON.stringify(docs, undefined , 2));

    }, (err) => {
        console.log('Unable to fetch Todos Collection');
    });

//  Count Data

    db.collection('Todos').find().count().then((docs) => {
        console.log('Count : ',docs);
    }, (err) => {
        console.log('Count not work for : ',err);
    });

  client.close();

});
