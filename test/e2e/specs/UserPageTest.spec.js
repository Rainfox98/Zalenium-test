import { usersPage, loginPage } from '../pages';
import { usersValidator } from '../validators';
import { context} from '../../data/Context';
import { sideMenuElement,headerElement } from '../elements';

const {userData} = context;

describe('Users function test', () => {
    before(() => {
        loginPage.open();
    });

    it('Should be created User', () => {
        loginPage.logIn(context.logins.user);
        headerElement.openMenu();
        sideMenuElement.openAdminAcess();
        sideMenuElement.openUsers();
        usersPage.createUser(userData);
        usersValidator.checkEditedUser();
    });
    it('Should be edited User', () => {
        usersPage.editUser(userData);
        usersValidator.checkEditedUser();
    });
    it('Should be find element with name from userData', () => {
        usersPage.SearchUser();
        usersValidator.checkSearchUser();
    });
    it('Should be deleted user', () => {
        usersPage.DeleteUser();
        usersValidator.checkDeletedUser();
    });
});
