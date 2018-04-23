var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');

var app = express(); 
// this is for heroku or localhost
const port = process.env.PORT || 3000; //
// if the port is availabe use that else use localhost
app.use(bodyParser.json()); // this is the middlewear we give to express

app.post('/todos', (req,res) => { // creating a new todo
    var todo = new Todo ({
        text: req.body.text
    });
    todo.save().then((doc)=>{
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});
app.get('/todos', (req,res) => { // getting a new todo
    Todo.find().then((todos) => {
        res.send({todos});
    },(e) => {
        res.status(400).send(e);
    });
});
//Get /todos/12345
app.get('/todos/:id', (req, res) => {
    //res.send(req.params);
    var id = req.params.id;
    //Valid id using isValid
    //404 -send back empty send
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    };

    Todo.findById(id).then((todo)=> {
        if(!todo) {
            return res.status(404).send();
        }
        res.send({todo}); // we respond with object that has todo property
    }).catch((e)=> {
        res.status(404).send();
    });
    
    
    //findbyID 
        //sucess 
            //if todo -send back
            //if no todo send back 404 with empty body
        //error
        //404 - and send emply body back


});
app.listen(port, () => {
    console.log(`Started on port ${port}`);
});

module.exports = {app};
