import{Page,Locator} from '@playwright/test'

export class clickLead {
page:Page
clickCreatelead:Locator

    constructor(tpage:Page) {
       this.page=tpage
       this.clickCreatelead=this.page.locator('text=Create Lead').first()
    }

async clickLeadCheck(){
    await this.clickCreatelead.click()
       
    }
}

