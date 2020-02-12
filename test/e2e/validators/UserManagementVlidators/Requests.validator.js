import { assert } from 'chai';
import { requestsPage } from '../../pages';

class RequestsValidation {
    checkRequestsPage() {
        assert.equal(requestsPage.titleElement.getText(), 'Requests');
    }
}

export default new RequestsValidation();
