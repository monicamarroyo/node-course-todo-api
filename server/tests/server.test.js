//import { request } from 'https';

const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

// dummy variables for our todo
const todos = [{text: 'First test todo'}, {
    text : 'Second test todo'
}];
//insert dummy text into db
// this is goning to empty our our database
beforeEach((done) => {
    Todo.remove({}).then(()=> {
        return Todo.insertMany(todos);
    }).then(() => done());
});
describe('POST /todos', () => {
    it('should create a new todo', (done) => {
        var text = 'Test todo text';
        
        request(app)
        .post('/todos')
        .send({text})
        .expect(200)
        .expect((res) => {
            expect(res.body.text).toBe(text);
        })
        .end((err,res) => {
            if(err) {
                return done(err);
            }
            Todo.find({text}).then((todos) => { // only find text
                expect(todos.length).toBe(1);
                expect(todos[0].text).toBe(text);
                done();
            }).catch ((e) => done(e));
        });
    });
    it('should not create todo with invalid data', (done)=> {
        request(app)
        .post('/todos')
        .send({})
        .expect(400)
        .end((err,res) => {
            if(err) {
                return done(err);
            }

            Todo.find().then((todos)=> {
                expect(todos.length).toBe(2); // we do this bcs of the two variables we inserted dummy /
                done();
            }).catch((e) => {
                done(e);
            });
        });
    });
});

describe('GET /todos', ()=> {
    it('should get all todos',(done) => {
        request(app)
        .get('/todos')
        .expect(200)
        .expect((res) => {
            expect(res.body.todos.length).toBe(2);
        })
        .end(done);
    });
});