import { select } from 'async'
import userData from '../fixtures/user-data.json'

describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    middleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']",
    genericDropDown: ".oxd-select-text-input"
  }
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
   })
  it('User Info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('Gustavo')
    cy.get(selectorsList.middleNameField).clear().type('Akihiro')
    cy.get(selectorsList.lastNameField).clear().type('Matsuoka')
    cy.get(selectorsList.genericField).eq(4).clear().type('EmpTest')
    cy.get(selectorsList.genericField).eq(5).clear().type('IdTest') 
    cy.get(selectorsList.genericField).eq(6).clear().type('CNH')
    cy.get(selectorsList.dateField).eq(0).clear().type('2025-13-01')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.dateField).eq(1).clear().type('1996-20-06')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.genericDropDown).eq(0).click()
    cy.get(':nth-child(4) > span').click()
    cy.get(selectorsList.genericDropDown).eq(1).click()
    cy.get(':nth-child(4) > span').click() 
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
  })

}) 