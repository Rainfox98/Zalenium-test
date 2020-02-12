import { assert } from 'chai';
import { smsPage } from '../pages';

class SmsValidation {
    checkSmsPage() {
        assert.equal(smsPage.titleElement.getText(), 'SMS');
    }
}

export default new SmsValidation();
