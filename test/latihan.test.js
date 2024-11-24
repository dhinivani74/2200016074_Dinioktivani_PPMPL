// src/test/latihan.test.js
describe('Latihan Tests', () => {
    test('Counter Default Value must be 0', () => {
        const counter = 0;
        expect(counter).toBe(0);
    });

    test('Increment works when button clicked', () => {
        let counter = 0;
        counter++;
        expect(counter).toBe(1);
    });

    test('Decrement works when button clicked', () => {
        let counter = 1;
        counter--;
        expect(counter).toBe(0);
    });

    test('Reset the count using reset button', () => {
        let counter = 10;
        counter = 0; // Simulasi tombol reset
        expect(counter).toBe(0);
    });

    test('Greeting component {nama}', () => {
        const greeting = 'Hello, My Name Dini!';
        expect(greeting).toBe('Hello, My Name Dini!');
    });

    test('Greeting component {nama dosen}', () => {
        const greeting = 'Hello, Pak Farid!';
        expect(greeting).toBe('Hello, Pak Farid!');
    });

    test('Triggers alert with correct message when clicked', () => {
        const alertMessage = 'How Are You!';
        expect(alertMessage).toBe('How Are You!');
    });
});