import { View } from "./view/view";
import { Model } from "./model/model";
import { ProductAction, ProductStatus } from "./constants";

export class Controller {
    constructor() {
        this.model = new Model();
        this.view = new View({
            products: this.model.products,
            onProductAction: this.onProductAction
        }) 
    }

    setProductStatus = (productId, productStatus) => {
        this.model.setProductStatus(productId, productStatus);
    }

    onProductAction = (action, payload) => {
        if (action === ProductAction.AddToCart || action === ProductAction.RemoveFromCart) {
            this.setProductStatus(
                payload,
                action === ProductAction.AddToCart
                    ? ProductStatus.InCart
                    : ProductStatus.NotInCart);
        }

        if (action === ProductAction.QuickView) {
            console.log(action, payload);
        }

        this.view.renderProducts(this.model.products);
    }
}
