class ProductManager {
  id = 1;

  constructor(path) {
    this.path = path;
    this.products = [];
  }

  addProduct(productData) {
    const { title, description, price, thumbnail, code, stock } = productData;

    if (!title || !description || !price || !thumbnail || !code || !stock) {
      return 'complete all fields';
    } else {
      const productFound = this.products.some((item) => item.code == code);
      if (productFound) {
        return 'The product already exists';
      } else {
        const product = { id: this.id, ...productData };
        this.products.push(product);
        this.id++;
        return 'Added product!';
      }
    }
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
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
  title: 'producto prueba',
  description: 'Este es un producto prueba',
  price: 10,
  thumbnail: 'Sin imagen',
  code: 'abc124',
  stock: 7,
};

const productManager = new ProductManager('products.json');
console.log(productManager.addProduct(product1));
console.log(productManager.addProduct(product2));

console.log(productManager.getProducts());

console.log(productManager.getProductById(2));

/* console.log(product1.addProduct('producto prueba', 'Este es un producto prueba', 10, 'Sin imagen', 'abc123', 1)); */
/* console.log(product1.addProduct('producto prueba', 'Este es un producto prueba', 10, 'Sin imagen', 'abc123', 1)); */
/* console.log(product1.addProduct('producto prueba 2', 'Este es un producto prueba', 200, 'Sin imagen', 'abc124', 25)); */
/* console.log(product1.addProduct('producto prueba 3', 'Este es un producto prueba', 200, 'Sin imagen', 'abc125', 25));
console.log(product1.getProductById(1)); */
/* console.log(product1.getProducts()); */
