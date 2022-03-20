import { expect } from "chai";
import { Checkout } from "../../pageObjects/checkout/checkout";
import { ProductDetails } from "../../pageObjects/productDetail";


describe('Cart', function () {
    it('can add item', function () {
       //const productDetails = new ProductDetails();
       ProductDetails.open('luggage/sv040ac07020_sunvoyage.html');
       ProductDetails.addToCart();
       Checkout.open(); 
    })
})