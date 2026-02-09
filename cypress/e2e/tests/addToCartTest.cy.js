import HomePage from '../../pages/homePage'
const homePageObj = new HomePage()
import testData from '../../fixtures/testData.json'

describe('test automation', () => {
    before (() => {
        cy.login(testData.login.username, testData.login.password)
    })
    it('Add to Cart Flow', () => {
        console.log(testData)  // Log the data to check if it's loaded correctly
        homePageObj.searchProduct(testData.product.productName)
        homePageObj.addToCart()
        homePageObj.verifySuccessMessage().should('contain', testData.message.successMessage).and('contain', testData.product.productName);
    })
})