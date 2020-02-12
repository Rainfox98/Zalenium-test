import { assert } from 'chai';
import { serviceTypesPage } from '../../pages';

class ServiceTypesValidation {
    checkServiceTypesPage() {
        assert.equal(
            serviceTypesPage.titleElement.getText(),
            'Service Types',
        );
    }
}

export default new ServiceTypesValidation();
