import { assert } from 'chai';
import { homePage, loginPage } from '../pages';
import {
    EMPTY_EMAIL_MESSAGE,
    EMPTY_PASSWORD_MESSAGE,
    USER_AUTH_ERROR_MESSAGE,
} from '../constants/SystemMessages.constant';

class LoginValidation {
    checkDashboardNavigation() {
        assert.strictEqual(
            homePage.isDisplayed(),
            true,
            'Dashboard page is not visible',
        );
    }

    checkIncorrectEmailMessage() {
        assert.equal(
            loginPage.userAuthErrorMessage.getText(),
            USER_AUTH_ERROR_MESSAGE,
        );
    }

    checkIncorrectPasswordMessage() {
        assert.equal(
            loginPage.userAuthErrorMessage.getText(),
            USER_AUTH_ERROR_MESSAGE,
        );
    }

    checkEmptyEmailMessage() {
        assert.equal(
            loginPage.emailErrorMessage.getText(),
            EMPTY_EMAIL_MESSAGE,
        );
    }

    checkEmptyPasswordMessage() {
        assert.equal(
            loginPage.passwordErrorMessage.getText(),
            EMPTY_PASSWORD_MESSAGE,
        );
    }
}
export default new LoginValidation();
