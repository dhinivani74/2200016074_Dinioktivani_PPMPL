function tambah(a, b) { 
    // Periksa tipe data dan lempar error jika bukan angka
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Input harus berupa angka');
    }

    // Kembalikan hasil penjumlahan
    return a + b;
}

function kali(a, b) { 
    // Periksa tipe data dan lempar error jika bukan angka
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Input harus berupa angka');
    }

    // Kembalikan hasil perkalian
    return a * b;
} 

function kurang(a, b) { 
    // Periksa tipe data dan lempar error jika bukan angka
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Input harus berupa angka');
    }

    // Kembalikan hasil pengurangan
    return a - b;
} 

function bagi(a, b) { 
    // Periksa tipe data dan lempar error jika bukan angka
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Input harus berupa angka');
    }

    // Cek jika pembagi nol
    if (b === 0) {
        throw new Error('Tidak bisa membagi dengan nol');
    }

    // Kembalikan hasil pembagian
    return a / b;
} 

module.exports = { tambah, kali, kurang, bagi };
