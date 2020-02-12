import { assert } from 'chai';
import { cardLocationsPage } from '../../pages';

class CardLocationsValidation {
    checkCardLocationsPage() {
        assert.equal(
            cardLocationsPage.titleElement.getText(),
            'Card Locations',
        );
    }
}

export default new CardLocationsValidation();
