import { assert } from 'chai';
import { auditPage } from '../pages';

class AuditPageValidation {
    checkAuditPagePage() {
        assert.equal(auditPage.titleElement.getText(), 'Audit Page');
    }
}

export default new AuditPageValidation();
