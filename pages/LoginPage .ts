import{Page} from '@playwright/test'
export class LoginPage {
page:Page
    constructor(tpage:Page) {
       this.page=tpage
    }
async enterUrl(url:string){
 await this.page.goto(url)
 //await this.page.waitForLoadState('domcontentloaded')
}
async EnterLogincredentials(username:string, password:string){
  await this.page.locator('#username').fill(username)
    await this.page.locator('[name="PASSWORD"]').fill(password)

}
async enterclicklogin(){
        await this.page.locator('.decorativeSubmit').click()
    }
}

