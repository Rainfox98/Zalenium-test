import { assert } from 'chai';
import { appVersionsPage } from '../../pages';

class AppVersionsValidation {
    checkAppVersionsPage() {
        assert.equal(appVersionsPage.titleElement.getText(), 'App Versions');
    }
}

export default new AppVersionsValidation();
