import { rolesPage, loginPage } from '../pages';
import { rolesValidator } from '../validators';
import { context } from '../../data/Context';
import { sideMenuElement, headerElement } from '../elements';

const { roleData } = context;

describe('Roles CRUD test', () => {
    before(() => {
        loginPage.open();
    });

    it('Should be create new Role', () => {
        loginPage.logIn(context.logins.user);
        headerElement.openMenu();
        sideMenuElement.openAdminAcess();
        sideMenuElement.openRoles();
        rolesPage.addNewRole(roleData);
        rolesValidator.checkCreatedRole();
    });
    it('Should be edit Role', () => {
        rolesPage.editRoles(roleData);
        rolesValidator.checkEditedRole();
    });
    it('Should de find Role by name', () => {
        rolesPage.searchRoles(roleData.name);
        rolesValidator.checkExistRole(roleData);
    });
    it('Should be delete Role', () => {
        rolesPage.deleteRoles();
        rolesValidator.checkDeletedRole();
    });
});
