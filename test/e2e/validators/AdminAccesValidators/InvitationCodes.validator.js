import { assert } from 'chai';
import { invitationCodesPage } from '../../pages';

class InvitationCodesValidation {
    checkInvitationCodesPage() {
        assert.equal(
            invitationCodesPage.titleElement.getText(),
            'Invitation Codes',
        );
    }
}

export default new InvitationCodesValidation();
