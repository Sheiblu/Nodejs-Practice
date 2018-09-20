const {MongoClient} = require('mongodb');
const dbName = 'TodoApp' ;

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err){
        return console.log('Server not Connect');
    }

    console.log('\nConnect Succcessfully\n');

    const db = client.db('TodoApp');

    //  Delete data use ' deleyeMany '
        db.collection('Todos').deleteMany({text: 'Delete Me'}).then((result) => {
            console.log('\n\n-------- DeleyeMany --------\n');
            console.log(result.result);
        });

    //  Delete data use ' DeleteOne '
    db.collection('Todos').deleteOne({text: 'Delete Me 2'}).then((result) => {
        console.log('\n\n-------- DeleteOne --------\n');
        console.log(result.result);
    });

    //  Delete data use ' findOneAndDelete '
    db.collection('Todos').findOneAndDelete({text: 'Delete Me befor Find me'}).then((result) => {
        console.log('\n\n-------- findOneAndDelete --------\n');
        console.log(result);
    }, (err) => {
        console.log('FindOneAndDelete not work for : ', err);
    });
        

   client.close();

});
