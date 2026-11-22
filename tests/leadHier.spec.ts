//import{test} from '@playwright/test'
import { clickCreatelead } from '../pages/page5'
import { HomePage } from '../pages/page3'
import { clickLead } from '../pages/page4'
import {test} from '../pages/fixture'

test('test lead from ',async ({page,MyHomePage})=>{
    //PAGE3
    await MyHomePage.clickHomePageCheck()
   
    //PAGE4
    let clicklead=new clickLead(page)
    await clicklead.clickLeadCheck()    

    //PAGE5
    let leadpage=new clickCreatelead(page)
    await leadpage.enterClickCheck()
    await leadpage.clickEnterLeadCheck()    

})