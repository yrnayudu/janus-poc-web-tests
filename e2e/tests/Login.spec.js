import homePage from '../pages/HomePage'
import loginPage from '../pages/LoginPage'
import racingPage from '../pages/RacingPage'

fixture`Login`
  .page`${homePage.url}`


test('Should login successfully with valid user credentials', async t => {
  await homePage.clickOnLoginOrRegister()
  await loginPage.atPage();
  await loginPage.login('Yogi', 'Test@1234')
  await racingPage.atPage()
  await t.wait(1000)

})

test('Should show login error when login with wrong username and password', async t => {
  await homePage.clickOnLoginOrRegister()
  await loginPage.atPage();
  await loginPage.login('Testss', 'Test@1234')
  await loginPage.assertError('User does not exist.')
  await t.wait(1000)
})

test('Should show login error when login with valid username and invalid password', async t => {
  await homePage.clickOnLoginOrRegister()
  await loginPage.atPage();
  await loginPage.login('Yogi', 'Test@123444')
  await loginPage.assertError('Incorrect username or password.')
  await t.wait(1000)
})
