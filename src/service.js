class Service {
    constructor(primaryRepository, secondaryRepository) {
        this.primaryRepository = primaryRepository;
        this.secondaryRepository = secondaryRepository;
    }

    getItemById(id) {
        const item = this.primaryRepository.getItemById(id) || this.secondaryRepository.getItemById(id);
        if (!item) {
            throw new Error('Item not found in both repositories'); // Pesan error yang benar
        }
        return item;
    }

    deleteItemById(id) {
        const index = this.data.findIndex(item => item.id === id);
        if (index === -1) {
            throw new Error(`Item with id ${id} not found`);
        }
        return this.data.splice(index, 1)[0]; // Menghapus item berdasarkan ID dan mengembalikannya
    }
    // Metode lain seperti addItem dan getAllItems
}

module.exports = Service;