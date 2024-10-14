const sinon = require('sinon');
const { expect } = require('chai');
const Service = require('../src/service');
const Repository = require('../src/repository'); // Pastikan ini benar

describe('Service Integration Tests with Multiple Stubs', () => {
    let service;
    let primaryRepositoryStub;
    let secondaryRepositoryStub;

    beforeEach(() => {
        primaryRepositoryStub = sinon.createStubInstance(Repository);
        secondaryRepositoryStub = sinon.createStubInstance(Repository);
        service = new Service(primaryRepositoryStub, secondaryRepositoryStub);
    });

    // Pengujian untuk metode deleteItemById
    it('should delete an item by id from primary repository', () => {
        const itemIdToDelete = 1; // ID item yang ingin dihapus
        primaryRepositoryStub.deleteItemById.withArgs(itemIdToDelete).returns(); // Atur stub untuk deleteItemById

        // Panggil metode deleteItemById
        service.primaryRepository.deleteItemById(itemIdToDelete);

        // Verifikasi bahwa deleteItemById dipanggil dengan ID yang benar
        expect(primaryRepositoryStub.deleteItemById.calledOnceWith(itemIdToDelete)).to.be.true;
    });

    it('should throw an error when trying to delete an item that does not exist', () => {
        const itemIdToDelete = 5; // ID item yang tidak ada
        primaryRepositoryStub.deleteItemById.withArgs(itemIdToDelete).throws(new Error('Item not found')); // Atur stub untuk mengeluarkan error

        // Verifikasi error yang dilempar saat mencoba menghapus item yang tidak ada
        expect(() => service.primaryRepository.deleteItemById(itemIdToDelete)).to.throw('Item not found');
    });
});
