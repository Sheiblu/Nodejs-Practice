const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

const todos = [
  {
    _id: new ObjectID(), 
    text: 'This is Fast test'
  },
  { 
    _id: new ObjectID(),
    text: 'This is Second test',
    completed: true,
    completedAt: 333
  }
];

beforeEach((done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
});

//     ----------------  Post -----------------
describe('\n\nPOST /todos', () => {
  it('should create a new todo', (done) => {
    var text = 'Test todo text';

    request(app)
      .post('/todos')
      .send({text})
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.find().then((todos) => {
          expect(todos.length).toBe(3);
          expect(todos[2].text).toBe(text);
          done();
        }).catch((e) => done(e));
      });
  });

  it('should not create todo with invalid body data', (done) => {
    request(app)
      .post('/todos')
      .send({})
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.find().then((todos) => {
          expect(todos.length).toBe(2);
          done();
        }).catch((e) => done(e));
      });
  });
});

describe('GET / todos ', () => {
  it("Should Provide Data", (done) => {
    request(app)
      .get('/todos')
      .expect(200)
      .expect((res) => {
        expect(res.body.docs.length).toBe(2);
      })
      .end(done);
  });
});

//     ----------------  Get -----------------
describe('GET/ todos/id', () => {
  it('should return todo Data',(done) => {
      request(app)
        .get(`/todos/${todos[0]._id.toHexString()}`)
        .expect(200)
        .expect((res) => {
          expect(res.body.text).toBe(todos[0].text);
         
        })
        .end(done);
  });

  it('Should return 404 if todo not found', (done) => {
    var hexId = new ObjectID().toHexString();
      request(app)
       .get(`/todos/${hexId}`)
       .expect(404)
       .end(done); 
  });

  it('Should return 404 for non-object ids ', (done) => {
      request(app)
       .get('/todos/135')
       .expect(404)
       .end(done); 
  });

});

//     ----------------  Delete -----------------
describe('Delete /todos/:id', () => {
  it('Should remove todo', (done) => {

    var hexId = todos[0]._id.toHexString();

    request(app)
      .delete(`/todos/${hexId}`)
      .expect(200)
      .expect((res) => {
        expect(res.body._id).toBe(hexId);
      })
      .end((err, res) => {
        if(err) return done(err);

        Todo.findById(hexId).then((docs) => {
          expect(docs).toBeFalsy();
          done();
        }).catch ((e) => done(e));
      }) 
  });


  it('should return 404 if todo not found', (done) => {
    var hexId = new ObjectID().toHexString();

    request(app)
      .delete(`/todos/${hexId}`)
      .expect(404)
      .end(done);
  });

  it('should return 404 if object id is invalid', (done) => {
    request(app)
      .delete('/todos/123abc')
      .expect(404)
      .end(done);
  });

});


//     ----------------  Patch -----------------
describe('PATCH /todos/:id', () => {
  it('Should Update the text', (done) => {
    var hexId = todos[0]._id.toHexString();
    var text = 'Should be the new text';

    request(app)
      .patch(`/todos/${hexId}`)
      .send({
        completed: true,
        text: text
      })
      .expect(200)
      .expect((res) => {
          expect(res.body.doc.text).toBe(text);
          expect(res.body.doc.completed).toBe(true);
          expect(res.body.doc._id).toBe(hexId);
      })
      .end(done);
  });

  it('Should not Upate the text', (done) => {
    var hexId = todos[0]._id.toHexString();
    var text = 'Text fail';

    request(app)
      .patch(`/todos/${hexId}`)
      .send({
        text,
        completed: false
      })
      .expect(200)
      .expect((res) => {
        expect(res.body.doc.text).toBe(text);
        expect(res.body.doc.completed).toBe(false);
        expect(res.body.doc.completedAt).toBe(null);
      }) 
      .end(done);

  });
});