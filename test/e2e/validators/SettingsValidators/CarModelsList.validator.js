import { assert } from 'chai';
import { carModelsListPage } from '../../pages';

class CarModelsListValidation {
    checkCarModelsListPage() {
        assert.equal(
            carModelsListPage.titleElement.getText(),
            'Car models List',
        );
    }
}

export default new CarModelsListValidation();
