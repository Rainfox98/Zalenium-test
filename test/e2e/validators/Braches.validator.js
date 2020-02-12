import { assert } from 'chai';
import { branchesPage } from '../pages';

class BranchesValidation {
    checkBranchesPage() {
        assert.equal(branchesPage.titleElement.getText(), 'Branches');
    }
}

export default new BranchesValidation();
