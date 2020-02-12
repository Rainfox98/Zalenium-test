import {loginPage} from '../e2e/pages/index';

describe('Example', () => {
    beforeEach(() => {
       browser.url('https://dev.mentalstack.com:3030/login');
    });
    it("Should make screen of full page", ()=>{
      browser.saveFullPageScreen('fullPage', { });
    });
    it("Should make screen of language label", ()=>{
        browser.saveElement(loginPage.languageLabel ,'languagelabel', { });
      });
});
    
