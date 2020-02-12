import { assert } from 'chai';
import { driverBlockPage } from '../pages';

class DriverBlockValidation {
    checkDriverBlockPage() {
        assert.equal(driverBlockPage.titleElement.getText(), 'Driver Block');
    }
}

export default new DriverBlockValidation();
