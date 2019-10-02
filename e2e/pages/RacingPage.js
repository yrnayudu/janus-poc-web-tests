import { Selector as $, t } from 'testcafe'

class RacingPage {

  constructor() {
    this.url = 'racing'
    this.yesterdayBtn = $('button[type=button]').withText('Yesterday')
    this.todayBtn = $('button[type=button]').withText('Today')
    this.tomorrowBtn = $('button[type=button]').withText('Tomorrow')
    this.bigRacesBtn = $('button[type=button]').withText('Big Races')
    
  }

  async login(username, password) {
    await t.typeText(this.usernameInput, username, { paste: true })
      .typeText(this.passwordInput, password, { paste: true })
    await t.expect(this.loginButton.hasAttribute('disabled')).notOk()
    await t.wait(1000)
    await t.click(this.loginButton)
  }

  async atPage() {
    await t.expect(this.yesterdayBtn.exists).ok()
  }

}

export default new RacingPage();