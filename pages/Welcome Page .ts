
import { LoginPage } from "./LoginPage ";

export class welcomePage extends LoginPage{
    async enterwelcomePage(){
        await this.page.locator('text=CRM/SFA').click()
    }

}