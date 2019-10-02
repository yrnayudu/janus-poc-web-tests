import { Selector as $, t } from 'testcafe'

class HomePage {
  constructor () {
    this.url = 'https://b2c-janus.data-nonprod.eu-west-2.aws.rp-cloudinfra.com/'
    this.loginRegisterLink = $('a').withText('Login / Register')
  }

  async clickOnLoginOrRegister() {
    await t.expect(this.loginRegisterLink.exists).ok()
    await t.click(this.loginRegisterLink)
  }
}

export default new HomePage()
