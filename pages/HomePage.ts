import { welcomePage } from "./Welcome Page ";

 export class clickLead extends welcomePage{
    async enterclickLead(){
        await this.page.locator('text=Leads').first().click()
    }
 }