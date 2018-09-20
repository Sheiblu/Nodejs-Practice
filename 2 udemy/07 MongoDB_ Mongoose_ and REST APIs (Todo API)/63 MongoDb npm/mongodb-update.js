const {MongoClient, ObjectID} = require('mongodb');
const dbName = 'TodoApp' ;

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err){
        return console.log('Server not Connect');
    }

    console.log('\n Connect Succcessfully \n');
    const db = client.db('TodoApp');


    //  Update data 

    db.collection('Todos').findOneAndUpdate({
        _id : new ObjectID('5b6980e40611500fa4fcd8ae'),
        text : "Something to do", 
    }, {
        $set : {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
        

   client.close();

});
