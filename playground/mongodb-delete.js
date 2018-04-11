const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to Mongodb server');
    
    //deleteMany 
 /*
    db.collection('Todo').deleteMany({text: 'Eat lunch'}).then((result) => {
        console.log(result);
    });
*/

    //deleteOne
    //db.collection('Todo').deleteOne({text: 'Eat lunch'}).then((result) => {
      //  console.log(result);
   // })

    //findAndDelete
    db.collection('Todo').findOneAndDelete({completed: false}).then((result) => {
        console.log(result);
    })

    //db.client()

});