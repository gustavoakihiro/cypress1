import { select } from 'async'
import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'

const dashboardPage = new DashboardPage()
const loginPage = new LoginPage()

describe('Login Orange HRM Tests', () => {


  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkWrongCredentialAlert()

  })

  it('Login - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.dashboardCheck()

  })
}) 