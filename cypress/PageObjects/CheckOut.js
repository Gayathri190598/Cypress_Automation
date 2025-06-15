class CheckOut
{
    btnCheckOut="#sc-buy-box-ptc-button > span > input";
    txtemail= "#ap_email_login";
    btnContinue= ".a-button-input";


    clickCheckOut()
    {
        cy.get(this.btnCheckOut).click();
    }

    enterEmail(email)
    {
        cy.get(this.txtemail).type(email);
    }

    clickContinue()
    {
        cy.get(this.btnContinue).click();
    }

}

export default new CheckOut();