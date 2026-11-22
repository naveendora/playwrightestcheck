import{Page,Locator} from '@playwright/test'

export class HomePage {
page:Page
homeLead:Locator

    constructor(tpage:Page) {
       this.page=tpage
       this.homeLead=this.page.locator('text=Leads').first()
    }

async clickHomePageCheck(){
    await this.homeLead.click()
       
    }
}

