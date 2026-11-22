import{Page,Locator} from '@playwright/test'

export class LoginPage {
page:Page
username:Locator
password:Locator
loginbutton:Locator
    constructor(tpage:Page) {
       this.page=tpage
       this.username=this.page.locator('#username')
       this.password=this.page.locator('[name="PASSWORD"]')
       this.loginbutton=this.page.locator('.decorativeSubmit')
    }

async EnterLogincredentials(){
  await this.username.fill('democsr2')
  await this.password.fill('crmsfa') 
}
async enterclicklogin(){
    await this.loginbutton.click()
       
    }
}

