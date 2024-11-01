from locust import HttpUser, task, between
import random
import json

class ProductUser(HttpUser):
    wait_time = between(1, 5)  # Tunggu antara 1 hingga 5 detik sebelum request selanjutnya

    @task(1)
    def get_all_products(self):
        self.client.get("/products")

    @task(1)
    def get_product_by_id(self):
        product_id = random.randint(1, 3)  # Angka antara 1 dan 3, sesuai jumlah produk
        self.client.get(f"/products/{product_id}")

    @task(1)
    def create_product(self):
        new_product = {
            "name": f"Produk Baru {random.randint(1, 100)}",  # Nama unik untuk setiap produk
            "price": random.randint(10000, 100000),  # Harga 
            "stock": random.randint(1, 100)  # Stok 
        }
        self.client.post("/products", json=new_product)

    @task(1)
    def update_product(self):
        product_id = random.randint(1, 3)  # Angka antara 1 dan 3, sesuai jumlah produk
        updated_product = {
            "name": f"Produk Diperbarui {random.randint(1, 100)}",
            "price": random.randint(10000, 100000),
            "stock": random.randint(1, 100)
        }
        self.client.put(f"/products/{product_id}", json=updated_product)

    @task(1)
    def delete_product(self):
        product_id = random.randint(1, 3)  # Angka antara 1 dan 3, sesuai jumlah produk
        self.client.delete(f"/products/{product_id}")

