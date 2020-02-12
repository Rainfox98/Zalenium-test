import { assert } from 'chai';
import { captainsPage } from '../../pages';

class CaptainsValidation {
    checkCaptainsPage() {
        assert.equal(captainsPage.titleElement.getText(), 'Drivers');
    }
}

export default new CaptainsValidation();
