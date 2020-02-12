import { loginPage } from '../pages';
import { loginValidator } from '../validators';
import { context } from '../../data/Context';

describe('Authentication page test.', () => {
    before(() => {
        loginPage.open();
    });

    it('Should redirect to page with URL /dashboard', () => {
        loginPage.logIn(context.logins.user);
        loginValidator.checkDashboardNavigation();
    });
});

describe('Incorrect email test.', () => {
    before(() => {
        loginPage.open();
    });

    it('Should show error message when has been entered incorrect email', () => {
        loginPage.logIn(context.logins.incorrectEmailUser);
        loginValidator.checkIncorrectEmailMessage();
    });
});

describe('Incorrect password test.', () => {
    before(() => {
        loginPage.open();
    });

    it('Should show error message when has been entered incorrect password', () => {
        loginPage.logIn(context.logins.incorrectPasswordUser);
        loginValidator.checkIncorrectPasswordMessage();
    });
});

describe('Empty email test.', () => {
    before(() => {
        loginPage.open();
    });
    it('Should show error message when email field is empty', () => {
        loginPage.logIn(context.logins.emptyEmailUser);
        loginValidator.checkEmptyEmailMessage();
    });
});

describe('Empty password test.', () => {
    before(() => {
        loginPage.open();
    });
    it('Should show error message when password field is empty', () => {
        loginPage.logIn(context.logins.emptyPasswordUser);
        loginValidator.checkEmptyPasswordMessage();
    });
});
