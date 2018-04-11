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
   //acessing the collection
   // to array gives us the documents
   //{find ({completed: false}); 
   //_id : 341234234sesdfw342 id 
   // _id: new ObjectID(id of object) only way it works

   /*
   db.collection('Todo').find().toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs,undefined,2));
   }, (err) => {
       console.log('unable to fetch todos ', err);
   });
//db.close();
 
*/
db.collection('Todo').find().count().then((count) => {
    console.log(`Todos count: ${count}`);
    
   }, (err) => {
       console.log('unable to fetch todos ', err);
   });
});
