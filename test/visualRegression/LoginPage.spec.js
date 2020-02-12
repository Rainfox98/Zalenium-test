import { assert} from 'chai';
import { loginPage } from '../e2e/pages';

describe('Visual regression tests on the home page.', () => {
    before(() => {
        loginPage.openPage();
    });

    it('Displays login button logo on login page.', function() {
        assert.equal(
            browser.checkElement(loginPage.spanLoginButton, this.test.title),
            0
        );
    });
    it('Displays language selector logo.', function() {
        assert.equal(
            browser.checkElement(loginPage.languageLabel, this.test.title),
            0
        );
     });
     it('Displays full page.', function() {
        assert.equal(
            browser.checkFullPageScreen("fullPage",{}),
            0
        );
     });
    });
