import { assert } from 'chai';
import { complaintsPage } from '../../pages';

class ComplaintsValidation {
    checkComplaintsPage() {
        assert.equal(complaintsPage.titleElement.getText(), 'Complains');
    }
}

export default new ComplaintsValidation();
