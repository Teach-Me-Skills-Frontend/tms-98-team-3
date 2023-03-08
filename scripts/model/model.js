import { Products } from "../constants"

const LocalStorageKey = {
    Products: 'products'
};

export class Model {
    constructor() {
        this.products = this.getSaveProducts();
    }

    setProductStatus = (productId, productStatus) => {

        const productIndex = this.products.findIndex(({ id }) => id === productId);

        if (productIndex > -1) {
            this.products[productIndex] = {
                ...this.products[productIndex],
                status: productStatus
            };
            localStorage.setItem(LocalStorageKey.Products, JSON.stringify(this.products));
        }
    }

    getSaveProducts = () => {
        const savedProducts = localStorage.getItem(LocalStorageKey.Products);
        if (!savedProducts) {
            return Products;
        }
        return JSON.parse(savedProducts);
    }
}
