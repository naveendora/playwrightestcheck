import { clickLead } from "./HomePage";

export class clickCreatelead extends clickLead{
     
    async enterclickCreatelead(){
        await this.page.locator('text=Create Lead').first().click()
    }
}