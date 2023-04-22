const fs = require('fs');

class ProductManager {
  id = 1;
  constructor(path) {
    this.path = path;
  }

  async addProduct(productData) {
    if (!fs.existsSync(this.path)) {
      await fs.promises.writeFile(this.path, '[]');
    }

    const { title, description, price, thumbnail, code, stock } = productData;

    if (!title || !description || !price || !thumbnail || !code || !stock) {
      return 'complete all fields';
    } else {
      let products = [];

      let productsContent = await fs.promises.readFile(this.path, 'utf-8');
      products = JSON.parse(productsContent);

      const productFound = products.some((item) => item.code == code);
      if (productFound) {
        return 'The product already exists';
      } else {
        if (products.length > 0) {
          this.id = products[products.length - 1].id + 1;
        }
        const product = { id: this.id, ...productData };
        products.push(product);
        let productString = JSON.stringify(products, null, 2);
        await fs.promises.writeFile(this.path, productString);
        return 'Added product!';
      }
    }
  }

  async getProducts() {
    fs.existsSync('');
    return this.products;
  }

  async getProductById(id) {
    const productFound = this.products.find((item) => item.id == id);
    if (productFound) {
      console.log('The found product is ');
      return productFound;
    } else {
      return 'Not found';
    }
  }
}

const product1 = {
  title: 'producto prueba',
  description: 'Este es un producto prueba',
  price: 10,
  thumbnail: 'Sin imagen',
  code: 'abc123',
  stock: 7,
};

const product2 = {
  title: 'producto prueba 2',
  description: 'Este es un producto prueba 2',
  price: 10,
  thumbnail: 'Sin imagen',
  code: 'abc124',
  stock: 15,
};

const productManager = new ProductManager('products.json');
productManager
  .addProduct(product1)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
productManager
  .addProduct(product2)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
