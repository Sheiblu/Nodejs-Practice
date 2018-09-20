const MongoClient = require('mongodb').MongoClient ;

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err){
        return console.log('Unable to Connect for ',err);
    }
    console.log('Connected Successfully');


    const db = client.db('TodoApp');

    db.collection('Todos').insertOne({
            text: 'Something to do',
            completed: false
    }, (err , result) => {
        if (err){
            return console.log('Unable To Insert data ',err);
        }

        console.log(JSON.stringify(result.ops, undefined , 2));
    });

    client.close() ;

});
