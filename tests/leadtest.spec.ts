import{test} from "@playwright/test"
import { CreateLeadPage } from "../pages/CreateLeadPage"

test("create lead page", async({page})=>{

    let wp = new CreateLeadPage(page)
   await wp.enterUrl("https://leaftaps.com/opentaps/control/main")
   await wp.EnterLogincredentials("democsr2","crmsfa")
    await wp.enterclicklogin()
   await wp.enterwelcomePage()
   await wp.enterclickLead()
   await wp.enterclickCreatelead()
   await wp.leadMandFields("Tata","Naveen","kumar","testcheck","TEST ENGINEER","1000","ECE","9551024822")
   await wp.enterLeadDone()

})