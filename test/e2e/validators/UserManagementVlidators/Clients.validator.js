import { assert } from 'chai';
import { clientsPage } from '../../pages';

class ClientsValidation {
    checkClientsPage() {
        assert.equal(clientsPage.titleElement.getText(), 'Clients');
    }
}

export default new ClientsValidation();
