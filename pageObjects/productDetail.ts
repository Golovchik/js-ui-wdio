import { BasePage } from "./base";

export class ProductDetailsPage extends BasePage {

    open(path) {
        super.open(path);
    }

    addToCart() {
        $('button[data-ga_action="add_to_cart"]').click(); 
    }
}

export const ProductDetails = new ProductDetailsPage();