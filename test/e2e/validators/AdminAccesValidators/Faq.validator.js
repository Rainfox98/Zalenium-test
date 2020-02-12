import { assert } from 'chai';
import { faqPage } from '../../pages';

class FaqValidation {
    checkFaqPage() {
        assert.equal(faqPage.titleElement.getText(), 'FAQ');
    }
}

export default new FaqValidation();
