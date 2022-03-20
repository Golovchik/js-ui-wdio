import { BasePage } from "../base";
import { ShoppingCart } from './components/shoppingCart';

export class CheckoutPage extends BasePage {
    shoppingCart: ShoppingCart;

    constructor() {
        super();
        this.shoppingCart = new ShoppingCart();
    }

    private get noItemsLabel() {
        return $('#b-empty-basket-container');
    }
    open() {
        super.open('/checkout');
    }

    async isNoItemsInCart() {
        if(this.noItemsLabel.isDisplayed()) {
            return (await this.noItemsLabel.getText()).includes('Ваша корзина пуста');
        } else {
            return false;
        }
    }

    isItemsInCart() {
        return !this.isNoItemsInCart();
    }
}

export const Checkout = new CheckoutPage();