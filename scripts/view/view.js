import { Basket } from "./basket/basket";
import { Products } from "./products/products";
import { Slider } from "./slider/slider";

export class View {
    constructor({ products, onProductAction, productsInBasket, onClearProductsFromBasket, totalPrice }) {
        this.Basket = new Basket({ productsInBasket, onClearProductsFromBasket, totalPrice });
        this.Slider = new Slider();
        this.Products = new Products({ products, onProductAction });

        const container = document.getElementById('goods-container');

        container.append(this.Products.productsWrap);
    }

    renderProductsInBasket = (productsInBasket) => {
        this.Basket.renderProductsInBasket(productsInBasket);
    }

    renderProducts = (products) => {
        this.Products.renderProducts(products);
    }

    setTotalPrice = (totalPrice) => {
        this.Basket.setTotalPrice(totalPrice);
    }
}
