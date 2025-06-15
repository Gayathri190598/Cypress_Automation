import HomePage from "../../PageObjects/HomePage"
import AddToCart from "../../PageObjects/AddToCart";
import CheckOut from "../../PageObjects/CheckOut";
import PaymentPage from "../../PageObjects/PaymentPage";

describe("To test amazon web application", ()=>{

    before("launch the amazon website", ()=>{
        cy.visit("https://www.amazon.in/");
    })

    beforeEach(() => {
        Cypress.on('uncaught:exception', () => {
        return false;
    });
  })

    it("enter the product to search", ()=>{

        //search product
        cy.fixture('AmazonSearch').then( (product)=>{
            HomePage.search(product.value);
            HomePage.clickSearchBtn();
            HomePage.verify();
        })    
        
        //add product to cart
        cy.fixture('Books').then( (label)=>{
            AddToCart.addToCart(label.title);
        })

        AddToCart.clickAddToCart();
        //checkout 
        CheckOut.clickCheckOut();

        //enter user email
         cy.fixture('userDetail').then( (data)=>{
            CheckOut.enterEmail(data.email);
        })
        
        CheckOut.clickContinue();

        //choose payment
        PaymentPage.selectPaymentMethod('Cash');

    })

})