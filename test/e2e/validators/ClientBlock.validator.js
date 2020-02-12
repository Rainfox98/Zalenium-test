import { assert } from 'chai';
import { clientBlockPage } from '../pages';

class ClientBlockValidation {
    checkClientBlockPage() {
        assert.equal(clientBlockPage.titleElement.getText(), 'Client Block');
    }
}

export default new ClientBlockValidation();
