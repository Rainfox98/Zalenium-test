import { assert } from 'chai';
import { bonusPlanPage } from '../../pages';

class BonusPlanValidation {
    checkBonusPlanPage() {
        assert.equal(bonusPlanPage.titleElement.getText(), 'Bonus Plan');
    }
}

export default new BonusPlanValidation();
