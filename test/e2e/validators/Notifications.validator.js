import { assert } from 'chai';
import { notificationsPage } from '../pages';

class NotificationsValidation {
    checkNotificationsPage() {
        assert.equal(
            notificationsPage.titleElement.getText(),
            'Notifications',
        );
    }
}

export default new NotificationsValidation();
