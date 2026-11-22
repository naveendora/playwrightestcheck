import { test as base } from '@playwright/test';
import { WelcomePage } from './page2';
import { LoginPage } from './page1';
import { HomePage } from './page3';

type MyFixture = {
    MyHomePage: HomePage;
}

export const test = base.extend<MyFixture>({
    MyHomePage: async ({page}, use) => {

        await page.goto("https://leaftaps.com/opentaps/control/main")
            //PAGE1
            let loginpage=new LoginPage(page)
            await loginpage.EnterLogincredentials()
            await loginpage.enterclicklogin()
            
            //PAGE2
            let welcomePage=new WelcomePage(page)
            await welcomePage.welcomepagecheck()
        //PAGE3
            let homepage=new HomePage(page)
            await use(homepage)
    
    }
}
)