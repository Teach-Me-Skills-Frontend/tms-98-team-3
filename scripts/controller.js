import { View } from "./view/view";
import { Model } from "./model/model";
import { ProductAction, ProductStatus } from "./constants";

export class Controller {
    constructor() {
        this.model = new Model();
        this.view = new View({
            products: this.model.products,
            productsInBasket: this.model.getProductsInBasket(),
            onProductAction: this.onProductAction,
            onClearProductsFromBasket: this.onClearProductsFromBasket,
            totalPrice: this.model.getTotalPrice(),
            onProductsSearch: this.searchForProducts
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
            this.view.quickViewModal.onQuickView(payload);
        }

        this.view.renderProducts(this.model.products);
        this.view.renderProductsInBasket(this.model.getProductsInBasket());
        this.view.setTotalPrice(this.model.getTotalPrice());
    }

    onClearProductsFromBasket = () => {
        this.model.removeProductsFromBasket();
        this.view.renderProducts(this.model.products);
        this.view.renderProductsInBasket(this.model.getProductsInBasket());
        this.view.setTotalPrice(this.model.getTotalPrice());
    }

    searchForProducts = (searchText) => {
        this.view.renderProducts(this.model.searchProduct(searchText));
    }
}
