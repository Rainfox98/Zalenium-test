import { companiesPage, loginPage } from '../pages';
import { companiesValidator } from '../validators';
import { context } from '../../data/Context';
import { sideMenuElement, headerElement } from '../elements';



describe('Companies function test', () => {
    before(() => {
        loginPage.open();
    });

    it('Should be created new Company', () => {
        loginPage.logIn(context.logins.user);
        headerElement.openMenu();
        sideMenuElement.openAdminAcess();
        sideMenuElement.openCompanies();
        companiesPage.createCompany(context.companyData);
        companiesValidator.checkCreatedCompany();
    });
    it('Should be edited Company ', () => {
        companiesPage.EditCompany(context.companyData);
        companiesValidator.checkEditCompany();
    });
    it('Should be deleted Company', () => {
        companiesPage.DeleteCompany();
        companiesValidator.checkDeletedCompany();
    });
});
