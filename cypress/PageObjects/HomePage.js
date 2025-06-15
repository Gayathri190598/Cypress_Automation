class HomePage
{
    txtSearchBox="input#twotabsearchtextbox";
    btnSearch="#nav-search-submit-button";


search(searchValue)
{
    cy.get(this.txtSearchBox).type(searchValue);
}

clickSearchBtn()
{
    cy.get(this.btnSearch).click();
}

verify()
{
    cy.url().should('include', 'dispenza');
}

}

export default new HomePage()