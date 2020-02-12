import { assert } from 'chai';
import { usersPage } from '../../pages';

class UsersValidation {
    checkUsersPage() {
        assert.equal(usersPage.titleElement.getText(), 'Users');
    }

    checkCreatedUser() {
        assert.equal(
            usersPage.CheckCreatedUser.getText(),
            context.UserDatas.name.getText(),
        );
    }

    checkEditedUser() {
        assert.equal(
            usersPage.CheckEditedUser.getText(),
            context.ChangedUserDatas.name.getText(),
        );
    }

    checkDeletedUser() {
        assert.equal(usersPage.CheckEditedUser.getText(), undefined);
    }

    checkSearchUser() {
        assert.equal(
            usersPage.SearchedUser.getText(),
            context.ChangedUserDatas.name.getText(),
        );
    }
}

export default new UsersValidation();
