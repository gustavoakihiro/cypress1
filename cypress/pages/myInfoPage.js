class MyInfoPage {

    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input",
            dateField: "[placeholder='yyyy-dd-mm']",
            dateCloseButton: ".--close",
            submitButton: "[type='submit']",
            genericDropDown: ".oxd-select-text-input"
            
        }

        return selectors

    }

    fillPerosnalDetails(firstName, lastName, nickName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(lastName)
        cy.get(this.selectorsList().lastNameField).clear().type(nickName)
    }
    
    fillEmployeeDetails(employeeId, otherId, driversLicenseNumber, expiryDate, birthDate) {
        cy.get(this.selectorsList().genericField).eq(4).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(driversLicenseNumber)
        cy.get(this.selectorsList().dateField).eq(0).clear().type(expiryDate)
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().dateField).eq(1).clear().type(birthDate)
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().genericDropDown).eq(0).click()
        cy.get(':nth-child(4) > span').click()
        cy.get(this.selectorsList().genericDropDown).eq(1).click()
        cy.get(':nth-child(4) > span').click()
    }

    checkSubmit() {
        cy.get(this.selectorsList().submitButton).eq(0).click()
        cy.get('body').should('contain', 'Successfully Updated')
    }

}

export default MyInfoPage