class RegisterPage{

    webLocators={

    firstName:'#input-firstname',
    lastName: '#input-lastname',
    email: '#input-email',
    telephone: '#input-telephone',
    password: '#input-password',
    passwordConfirm: '#input-confirm',
    policyCheckbox: 'input[type="checkbox"]',
    continue: '.btn.btn-primary'

    }

    openURL(){
        cy.visit(Cypress.env('URL'))
    }

    enterFirstName(FName){
        cy.get(this.webLocators.firstName).type(FName)
    }

    enterlastName(LName){
        cy.get(this.webLocators.lastName).type(LName)
    }

    enterEmail(email){
        cy.get(this.webLocators.email).type(email)
    }

     enterTelephone(phoneNo){
        cy.get(this.webLocators.telephone).type(phoneNo)
    }

    enterPassword(password){
        cy.get(this.webLocators.password).type(password)
        cy.get(this.webLocators.passwordConfirm).type(password)
    }

    selectCheckbox(){
        cy.get(this.webLocators.policyCheckbox).check()
    }

    clickOnContinue(){
        cy.get(this.webLocators.continue).click()
    }

}
export default RegisterPage