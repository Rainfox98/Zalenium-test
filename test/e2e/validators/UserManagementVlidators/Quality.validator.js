import { assert } from 'chai';
import { qualityPage } from '../../pages';

class QualityValidation {
    checkQualityPage() {
        assert.equal(qualityPage.titleElement.getText(), 'Quality');
    }
}

export default new QualityValidation();
