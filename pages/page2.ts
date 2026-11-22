import{Page,Locator} from '@playwright/test'

export class WelcomePage {
page:Page
welcomePageObj:Locator

    constructor(tpage:Page) {
       this.page=tpage
       this.welcomePageObj=this.page.locator('text=CRM/SFA')
    }

async welcomepagecheck(){
    await this.welcomePageObj.click()
       
    }
}

