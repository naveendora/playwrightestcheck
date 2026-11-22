import{Page,Locator} from '@playwright/test'

export class clickCreatelead {
page:Page
companyname:Locator
firstname:Locator
lastname:Locator
ptitle:Locator
gtitle:Locator
annrev:Locator
dept:Locator
pho:Locator
clickEnterlead:Locator

    constructor(tpage:Page) {
       this.page=tpage
    this.companyname= this.page.locator('input[id="createLeadForm_companyName"]')  
    this.firstname= this.page.locator('#createLeadForm_firstName')
    this.lastname= this.page.locator('#createLeadForm_lastName')
    this.ptitle= this.page.locator('#createLeadForm_personalTitle')
    this.gtitle= this.page.locator('#createLeadForm_generalProfTitle')
    this.annrev= this.page.locator('#createLeadForm_annualRevenue')
    this.dept=this.page.locator('#createLeadForm_departmentName') 
    this.pho=this.page.locator('#createLeadForm_primaryPhoneNumber')
    this.page.locator('#createLeadForm_dataSourceId').selectOption({value:'LEAD_CONFERENCE'})
       this.clickEnterlead= this.clickEnterlead=this.page.locator('[value="Create Lead"]')
    }

async enterClickCheck(){
    await this.companyname.fill('Testleaf')
    await this.firstname.fill('Naveen')
    await this.lastname.fill('Kumar')
    await this.ptitle.fill('Mr')
    await this.gtitle.fill('Testleaf')
    await this.annrev.fill('1000000')
    await this.dept.fill('Testing')
    await this.pho.fill('1234567890')
}
async clickEnterLeadCheck(){
    await this.clickEnterlead.click()
       
    }
}

