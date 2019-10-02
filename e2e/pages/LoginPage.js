import { Selector as $, t } from 'testcafe'

class LoginPage {

  constructor() {
    this.usernameInput = $('input[placeholder="Username is required"]')
    this.passwordInput = $('input[type=password]')
    this.loginButton = $('button[type=button]').find('a')
    //this.loginLink = this.loginButton.$('a')
  }

  async login(username, password) {
    await t.typeText(this.usernameInput, username, { paste: true })
      .typeText(this.passwordInput, password, { paste: true })
    await t.expect(this.loginButton.hasAttribute('disabled')).notOk()
    await t.wait(1000)
    await t.click(this.loginButton)
  }

  async atPage() {
    await t.expect(this.loginButton.exists).ok()
  }

  async assertError(error) {
    await t.expect($('.text-danger').innerText).eql(error);

  }

}

export default new LoginPage();