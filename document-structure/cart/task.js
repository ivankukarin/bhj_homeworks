class Product {
  
  constructor(container) {
    this.container = container;
    this.id = this.container.dataset.id;
    this.nameProduct = container.querySelector(".product__title");
    this.imgProduct = container.querySelector(".product__image");
    this.quantityProduct = container.querySelector(".product__quantity-value");
    this.buttonIncrease = container.querySelector(
      ".product__quantity-control_inc"
    );
    this.buttonDecrease = container.querySelector(
      ".product__quantity-control_dec"
    );
    
    this.buttonAddProduct = container.querySelector(".product__add");

    this.decrease();
    this.increase();
    this.addToCart();
  }

  decrease() {
    this.buttonDecrease.addEventListener("click", () => {
      this.quantityProduct.textContent--;
      if (this.quantityProduct.textContent == 0) {
        this.quantityProduct.textContent = 1;
      }
    });
  }

  increase() {
    this.buttonIncrease.addEventListener("click", () => {
      this.quantityProduct.textContent++;
    });
  }

  addToCart() {
    this.buttonAddProduct.addEventListener("click", () => {
      let cart = document.querySelector(".cart__products");
      let currentProduct = cart.querySelector(`[data-id='${this.id}']`);

      if (!currentProduct) {
        let product = document.createElement("div");
        product.classList.add("cart__product");
        product.dataset.id = this.id;

        let image = document.createElement("img");
        image.classList.add("cart__product-image");
        image.src = this.imgProduct.src;
        product.append(image);

        let count = document.createElement("div");
        count.classList.add("cart__product-count");
        count.textContent = this.quantityProduct.textContent;
        product.append(count);
        cart.append(product);
      } else {
        console.log(currentProduct.textContent);
        console.log(this.quantityProduct.textContent);
        
        currentProduct.querySelector('.cart__product-count').textContent = Number(currentProduct.querySelector('.cart__product-count').textContent) + Number(this.quantityProduct.textContent);
      }
    });
  }
}

new Product(document.querySelector('[data-id = "1"]'));
new Product(document.querySelector('[data-id = "2"]'));

