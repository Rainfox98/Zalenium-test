import { assert } from 'chai';
import { mapViewPage } from '../pages';

class MapViewValidation {
    checkMapViewPage() {
        assert.equal(mapViewPage.titleElement.getText(), 'Drivers Map');
    }
}

export default new MapViewValidation();
