// latihantest.js
const { expect } = require('chai');
const { tambah, kali } = require('./math');

describe('Fungsi Matematika - Kasus Negatif dan Positif', () => {

    // Pengujian fungsi tambah
    describe('Fungsi Tambah', () => {
        it('seharusnya mengembalikan error untuk input string a + 5', () => {
            expect(() => tambah('a', 5)).to.throw('Input harus berupa angka');
        });

        it('seharusnya mengembalikan error untuk input null', () => {
            expect(() => tambah(null, 8)).to.throw('Input harus berupa angka');
        });

        it('seharusnya mengembalikan error saat menambahkan null dengan null', () => {
            expect(() => tambah(null, null)).to.throw('Input harus berupa angka');
        });

        it('seharusnya melempar error untuk input array [1, 2] + 3', () => {
            expect(() => tambah([1, 2], 3)).to.throw('Input harus berupa angka');
        });

        // Kasus positif
        it('seharusnya mengembalikan 0 untuk input -5 + 5', () => {
            expect(tambah(-5, 5)).to.equal(0);
        });
    });

    // Pengujian fungsi kali
    describe('Fungsi Kali', () => {
        it('seharusnya melempar error untuk input string', () => {
            expect(() => kali('b', 3)).to.throw('Input harus berupa angka');
        });

        it('seharusnya melempar error untuk input null', () => {
            expect(() => kali(null, 3)).to.throw('Input harus berupa angka');
        });

 
        // Kasus positif
        it('seharusnya mengembalikan 0 untuk input 0 * 5', () => {
            expect(kali(0, 5)).to.equal(0);
        });

        it('seharusnya mengembalikan -15 untuk input -5 * 3', () => {
            expect(kali(-5, 3)).to.equal(-15);
        });
    });
});
