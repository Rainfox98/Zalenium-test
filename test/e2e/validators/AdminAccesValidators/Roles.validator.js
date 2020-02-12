import { assert } from 'chai';
import { rolesPage } from '../../pages';
import {
    CREATE_ROLE_MESSAGE,
    EDIT_ROLE_MESSAGE,
    DELETE_ROLE_MESSAGE,
} from '../../constants/SystemMessages.constant';

class RolesValidation {
    checkRolesPage() {
        assert.equal(rolesPage.ElementTitle.getText(), 'Roles');
    }

    checkCreatedRole() {
        assert.equal(
            rolesPage.CreateRoleMessage.getText(),
            CREATE_ROLE_MESSAGE,
        );
    }

    checkEditedRole() {
        assert.equal(rolesPage.EditRoleMessage.getText(), EDIT_ROLE_MESSAGE);
    }

    checkExistRole(roleData) {
        assert.equal(rolesPage.CreatedRole.getText(), roleData.name);
    }

    checkDeletedRole() {
        assert.equal(
            rolesPage.DeleteRoleMessage.getText(),
            DELETE_ROLE_MESSAGE,
        );
    }
}

export default new RolesValidation();
