import { assert } from 'chai';
import { carModelsPage } from '../../pages';

class CarModelsValidation {
    checkCarModelsPage() {
        assert.equal(carModelsPage.titleElement.getText(), 'Car Models');
    }
}

export default new CarModelsValidation();
