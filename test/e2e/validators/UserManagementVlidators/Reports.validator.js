import { assert } from 'chai';
import { reportsPage } from '../../pages';

class ReportsValidation {
    checkReportsPage() {
        assert.equal(reportsPage.titleElement.getText(), 'Reports');
    }
}

export default new ReportsValidation();
