const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5ace8dcfec947b584b3d7e5d';
if(!ObjectID.isValid(id)) { // second way to validate id
    console.log('Id not valid');
}
/*
Todo.find({
    _id:id // this converts ob to string no converstion nessary
}).then((todos)=> {
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo);
});
*/
// this is the easiest wat to find
Todo.findById(id).then((todo) => {
    if(!todo) {
        return console.log('Id not found'); // check if ID not found
    }
    console.log('Todo by id', todo);
}).catch((e) => console.log(e));

//validate an ID
