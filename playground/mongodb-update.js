const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to Mongodb server');
    //find one takes filter, update, options, callback
    //options are projection, sort, maxTimes, inser, returnOrginal

   db.collection('Todo').findOneAndUpdate({
       _id: new ObjectID("5ace22e43a3cc6105c3d4b4a")
   }, {
       $set: {
           completed: true
       }
   }, {
       returnOriginal : false
   }).then((result)=> {
        console.log(result);
   });
});