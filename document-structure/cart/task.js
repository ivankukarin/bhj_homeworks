class Product {
  /// data-id=1
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
    // this.cart = document.querySelector(".cart__products");
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
      console.log(cart);
      if (!cart.includes(child => child.getAttribute("data-id") == this.id)) {
        console.log("Нет такого в корзине, сейчас добавим");

        cart.insertAdjacentHTML(
          "beforeEnd",
          `<div class="cart__product" data-id="${this.id}"><img class ="cart__product-image" src="${this.imgProduct.src}"><div class="cart__product-count">${this.quantityProduct.textContent}</div></div>`
        );
      } else {
        let productInCart = cart.find(
          child => child.getAttribute("data-id") == this.id
        );
        let productInCartCount = productInCart.querySelector(
          ".cart__product-count"
        );
        productInCartCount.textContent =
          productInCartCount.textContent + this.quantityProduct.textContent;
      }
    });
  }
}

new Product(document.querySelector('[data-id = "1"]'));
new Product(document.querySelector('[data-id = "2"]'));
// console.log(document.querySelector('[data-id = "1"]'));
