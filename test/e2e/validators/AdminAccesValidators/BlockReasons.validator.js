import { assert } from 'chai';
import { blockReasonsPage } from '../../pages';

class BlockReasonsValidation {
    checkBlockReasonsPage() {
        assert.equal(
            blockReasonsPage.titleElement.getText(),
            'Block Reasons',
        );
    }
}

export default new BlockReasonsValidation();
