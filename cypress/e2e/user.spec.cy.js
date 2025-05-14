import { select } from 'async'
import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {

  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    
    dashboardPage.dashboardCheck()
    
    menuPage.accessPerformance()
    menuPage.accessMyinfo()
    
    myInfoPage.fillPerosnalDetails(chance.first(), chance.last(), chance.string())
    myInfoPage.fillEmployeeDetails('EmployId', 'otherId', 'CNH', '2025-13-01','1996-20-06')
    myInfoPage.checkSubmit()
  })

}) 