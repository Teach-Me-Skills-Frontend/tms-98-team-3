import { Basket } from "./basket/basket";
import { Products } from "./products/products";
import { Slider } from "./slider/slider";

export class View {
    constructor ({products, onProductAction}) {
        this.Basket = new Basket();
        this.Slider = new Slider();
        this.Products = new Products({products, onProductAction});

        const container = document.getElementById('goods-container');
        
        container.append(this.Products.productsWrap);
    }

    renderProducts = (products) => {
        this.Products.renderProducts(products);
    }
}
