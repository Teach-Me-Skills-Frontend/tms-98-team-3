import { Products } from "./products/products";

export class View {
    constructor ({products, onProductAction}) {
        
        this.Products = new Products({products, onProductAction});

        const container = document.getElementById('goods-container');
        
        container.append(this.Products.productsWrap);
    }

    renderProducts = (products) => {
        this.Products.renderProducts(products);
    }
}
