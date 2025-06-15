class books{
    btnAddToCart="input#add-to-cart-button";

    addToCart(label)
    {
        cy.clickLink1(label);
    }

    clickAddToCart()
    {
        cy.get(this.btnAddToCart).click();
    }
}

export default new books()
