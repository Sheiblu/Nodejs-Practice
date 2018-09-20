const request = require('superTest');
const expect = require('expect');
const app = require('./server').app;

describe('Server', () => {
    describe('GET /', () => {
        it('Should Return "Hello World responce" ', (done) => {
            request(app)
            .get('/')
            .expect(200)
            .expect('Hello World')
            .end(done);
        });
    });

    describe('GET /users', () => {
        it('For \/users Should Return "Hello World responce" ', (done) => {
            request(app)
            .get('/users')
            .expect(200)
            .expect((res) => {
                expect(res.body).toContainEqual({
                    name : 'Sheiblu',
                    age : 23
                });
            })
            .end(done);
        });
    });


    describe('GET / *', () => {
        it('For\/* responce "Error Message', (done) => {
            request(app) 
               .get('/*')
               .expect(404)
               .expect((res) => {
                expect(res.body).toEqual({
                    error : 'Page not found.',
                    name : "Server Test"
                });
               })
               .end(done);
        });
    });

});
