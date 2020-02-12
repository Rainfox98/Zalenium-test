import { assert } from 'chai';
import { carBrandsPage } from '../../pages';

class CarBrandsValidation {
    checkCarBrandsPage() {
        assert.equal(carBrandsPage.titleElement.getText(), 'Car Brands');
    }
}

export default new CarBrandsValidation();
