import { clickCreatelead } from "./LeadPage";

export class CreateLeadPage extends clickCreatelead{
    async leadMandFields(companyname:string,firstname:string,lastname:string,ptitle:string,gtitle:string,annrev:string,dept:string,pho:string){
        await this.page.locator('input[id="createLeadForm_companyName"]').fill(companyname)
    await this.page.locator('#createLeadForm_firstName').fill(firstname)
    await this.page.locator('#createLeadForm_lastName').fill(lastname) 
    await this.page.locator('#createLeadForm_personalTitle').fill(ptitle) 
    await this.page.locator('#createLeadForm_generalProfTitle').fill(gtitle)
    await this.page.locator('#createLeadForm_annualRevenue').fill(annrev)
    await this.page.locator('#createLeadForm_departmentName').fill(dept) 
    await this.page.locator('#createLeadForm_primaryPhoneNumber').fill(pho) 
    await this.page.locator('#createLeadForm_dataSourceId').selectOption({value:'LEAD_CONFERENCE'})
    }
     async enterLeadDone(){
        await this.page.locator('[value="Create Lead"]').click()
    }
}