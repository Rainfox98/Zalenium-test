import { assert } from 'chai';
import { carTypesPage } from '../../pages';

class CarTypesValidation {
    checkCarTypesPage() {
        assert.equal(carTypesPage.titleElement.getText(), 'Car Types');
    }
}

export default new CarTypesValidation();
