import { assert } from 'chai';
import { promoCodesPage } from '../pages';

class PromoCodesValidation {
    checkPromoCodesPage() {
        assert.equal(promoCodesPage.titleElement.getText(), 'Promo Codes');
    }
}

export default new PromoCodesValidation();
