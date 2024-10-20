const request = require('supertest');
const { expect } = require('chai');
const app = require('../src/app');

describe('API Testing', () => {
    it('should return all items', (done) => {
        request(app)
            .get('/api/items')
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.body).to.be.an('array');
                expect(res.body.length).to.be.at.least(1);
                done();
            });
    });

    it('should create a new item', (done) => {
        const newItem = { name: 'Item 3' }; 
        request(app)
            .post('/api/items')
            .send(newItem)
            .end((err, res) => {
                expect(res.status).to.equal(201);
                expect(res.body).to.have.property('id');
                expect(res.body).to.have.property('name', 'Item 3'); 
                done();
            });
    });

    it('should update an item by id', (done) => {
        const updatedItem = { name: 'Updated Item 3' };
        request(app)
            .put('/api/items/3') 
            .send(updatedItem)
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.body).to.have.property('name', 'Updated Item 3');
                done();
            });
    });

    it('should delete an item by id', (done) => {
        request(app)
            .delete('/api/items/3') 
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.body).to.have.property('message', 'Item deleted successfully');
                done();
            });
    });
});
