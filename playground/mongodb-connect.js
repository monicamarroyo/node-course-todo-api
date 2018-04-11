//npm install mongodb@2.2.5 --save 
//mongo client lets u connect to mongo server
const {MongoClient, ObjectID} = require('mongodb');
// takes two arguments url or amzon or heroku url second argument is a a call back 
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    if(err){
     return console.log('Unable to connect to mongo db server');
    }
    console.log('Connected to mongodb server');
    // the string name of collection 
    db.collection('Todo').insertOne( {
        text: 'Something to do',
        completed : false
    }, (err,results)=> {
        if(err) {
            return console.log('unable to insert todo');
        }
        console.log(JSON.stringify(results.ops, undefined,2));
    });
db.close();
});
