class PaymentPage {
  selectPaymentMethod(method) {
    switch (method) {
      case 'CreditCard':
        cy.contains('Credit or debit card').click();
        break;

      case 'UPI':
        cy.contains('Other UPI Apps').click();
        break;

      case 'NetBanking':
        cy.contains('Net Banking').click();
        break;

      case 'AmazonPay':
        cy.contains('Amazon Pay').click();
        break;

      case 'Cash':
        cy.contains('Cash on Delivery/Pay on Delivery').click();
        break;

      default:
        cy.log('Invalid payment method selected');
    }
  }

  verifySelection() {
    // Check if a payment option is selected
    cy.get('.pmts-selected').should('exist');
  }
}

export default new PaymentPage();