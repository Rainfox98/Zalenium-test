import { assert } from 'chai';
import { typesPage } from '../../pages';

class TypesValidation {
    checkTypesPage() {
        assert.equal(typesPage.titleElement.getText(), 'Types');
    }
}

export default new TypesValidation();
