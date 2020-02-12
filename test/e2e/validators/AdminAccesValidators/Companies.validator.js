import { assert } from 'chai';
import { companiesPage } from '../../pages';
import {
    DELETE_COMPANY_MESSAGE,
    CREATE_COMPANY_MESSAGE,
} from '../../constants/SystemMessages.constant';

class CompaniesValidation {
    checkCompaniesPage() {
        assert.equal(companiesPage.titleElement.getText(), 'Companies');
    }

    checkCreatedCompany() {
        assert.equal(
            companiesPage.CreateCompanyMessage.getText(),
            CREATE_COMPANY_MESSAGE,
        );
    }

    checkEditCompany() {
        assert.equal(
            companiesPage.EditedCompany.getText(),
            'Fund of Speedwaugonqwe',
        );
    }

    checkDeletedCompany() {
        assert.equal(
            companiesPage.EditedCompany.getText(),
            DELETE_COMPANY_MESSAGE,
        );
    }
}

export default new CompaniesValidation();
