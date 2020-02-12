import { assert } from 'chai';
import { cancellationReasonsPage } from '../../pages';

class CancellationReasonsValidation {
    checkCancellationReasonsPage() {
        assert.equal(
            cancellationReasonsPage.titleElement.getText(),
            'Cancellation Reasons',
        );
    }
}

export default new CancellationReasonsValidation();
