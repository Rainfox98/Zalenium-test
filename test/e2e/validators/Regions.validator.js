import { assert } from 'chai';
import { regionsPage } from '../pages';

class RegionsValidation {
    checkRegionsPage() {
        assert.equal(regionsPage.titleElement.getText(), 'Regions');
    }
}

export default new RegionsValidation();
