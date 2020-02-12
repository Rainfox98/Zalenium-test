import { assert } from 'chai';
import { blockReasonPage } from '../../pages';

class BlockReasonValidation {
    checkBlockReasonPage() {
        assert.equal(blockReasonPage.titleElement.getText(), 'Block Reason');
    }
}

export default new BlockReasonValidation();
