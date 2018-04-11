var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');

var app = express(); 
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
app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports = {app};
