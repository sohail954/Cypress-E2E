class HomePage{

    webLocators = {
        search_input: '.form-control.input-lg',
        click_search: '.btn.btn-default.btn-lg',
        product: 'img[title="MacBook"].img-responsive',
        addtocart: '#button-cart',
        successMessages: '.alert.alert-success.alert-dismissible'
    }

    searchProduct(productName){
        cy.get(this.webLocators.search_input).type(productName)
        cy.get(this.webLocators.click_search).click()
        cy.get(this.webLocators.product).click()
    }


    addToCart(){
        cy.get(this.webLocators.addtocart).should('be.visible').click()
    }

    verifySuccessMessage() {
        return cy.get(this.webLocators.successMessages)
    }
}
export default HomePage