import { assert } from 'chai';
import { settingsPage } from '../../pages';

class SettingsValidation {
    checkSettingsPage() {
        assert.equal(settingsPage.titleElement.getText(), 'Settings');
    }
}

export default new SettingsValidation();
