from flask import Flask, jsonify, request

app = Flask(__name__)

# Dummy data untuk menyimpan data produk toko
products = [
    {
        "id": 1, 
        "name": "Kopi Arabika", 
        "price": 50000, 
        "stock": 20
    },
    {
        "id": 2, 
        "name": "Teh Hijau", 
        "price": 30000, 
        "stock": 50
    },
    {
        "id": 3, 
        "name": "Cokelat Bubuk", 
        "price": 40000, 
        "stock": 30
    }
]

# GET ALL: Mendapatkan semua produk
@app.route('/products', methods=['GET'])
def get_products():
    return jsonify(products), 200

# GET: Mendapatkan produk berdasarkan ID
@app.route('/products/<int:product_id>', methods=['GET'])
def get_product_by_id(product_id):
    product = next((product for product in products if product["id"] == product_id), None)
    if product:
        return jsonify(product), 200
    return jsonify({"error": "Product not found"}), 404

# POST: Menambahkan produk baru
@app.route('/products', methods=['POST'])
def create_product():
    data = request.get_json()
    new_product = {
        "id": products[-1]["id"] + 1 if products else 1,
        "name": data.get("name"),
        "price": data.get("price"),
        "stock": data.get("stock")
    }
    products.append(new_product)
    return jsonify(new_product), 201

# PUT: Memperbarui produk berdasarkan ID
@app.route('/products/<int:product_id>', methods=['PUT'])
def update_product(product_id):
    product = next((product for product in products if product["id"] == product_id), None)
    if product:
        data = request.get_json()
        product["name"] = data.get("name", product["name"])
        product["price"] = data.get("price", product["price"])
        product["stock"] = data.get("stock", product["stock"])
        return jsonify(product), 200
    return jsonify({"error": "Product not found"}), 404

# DELETE: Menghapus produk berdasarkan ID
@app.route('/products/<int:product_id>', methods=['DELETE'])
def delete_product(product_id):
    global products
    products = [product for product in products if product["id"] != product_id]
    return jsonify({"message": "Product deleted"}), 200

if __name__ == '__main__':
    app.run(debug=True)
