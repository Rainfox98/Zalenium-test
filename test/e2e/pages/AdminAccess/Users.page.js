class UsersPage {
    openPage() {
        browser.url('/users');
    }

    get titleElement() {
        return $('//*[@id="root"]/main/div/div[1]/h5[text()="Users"]');
    }

    get addNewUser() {
        return $('//*[@id="root"]/main/div/div[1]/div/button');
    }

    get searchField() {
        return $('//*[@id="outlined-dense"]');
    }

    get nameField() {
        return $('//*[@id="root"]/main/div/div/form/div[1]/div/div/input');
    }

    get checkCreatedUser() {
        return $(
            '//*[@id="root"]/main/div/div[2]/table/tbody/tr[4]/td[contains(text(), "Josuke Higashikata")]',
        );
    }

    get checkEditedUser() {
        return $(
            '//*[@id="root"]/main/div/div[2]/table/tbody/tr[4]/td[contains(text(), "Bruno Buchelatti")]',
        );
    }

    get emailField() {
        return $('//*[@id="root"]/main/div/div/form/div[2]/div/div/input');
    }

    get passwordField() {
        return $('//*[@id="root"]/main/div/div/form/div[3]/div/div/input');
    }

    get confirmPasswordField() {
        return $('//*[@id="root"]/main/div/div/form/div[4]/div/div/input');
    }

    get roleMark() {
        return $(
            '//*[@id="root"]/main/div/div/form/div[5]/label[contains(name, "Stand User")]',
        );
    }

    get createButton() {
        return $('//*[@id="root"]/main/div/div/form/div[6]/button[1]');
    }

    get saveButton() {
        return $('//*[@id="root"]/main/div/div/form/div[4]/button[1]');
    }

    get editButton() {
        return $(
            '//*[@id="root"]/main/div/div[2]/table/tbody/tr[1]/td[5]/button[1]',
        );
    }

    get deleteButton() {
        return $(
            '//*[@id="root"]/main/div/div[2]/table/tbody/tr[contains(text(), "Bruno Buchelatti")]/td[5]/button[2]'
        );
    }

    get confirmDeletePopup() {
        return $('/html/body/div[2]/div[3]/div/div/div/button[1]');
    }

    get searchedUser() {
        return $('//*[@id="root"]/main/div/div[2]/table/tbody/tr/td[2]');
    }

    selectRole(roleName) {
        $(`//*[@name="${roleName}"]`).click();
    }

    createUser( userData) {
        this.addNewUser.waitForDisplayed();
        this.addNewUser.click();
        this.nameField.waitForEnabled();
        this.nameField.setValue(userData.name);
        this.emailField.waitForEnabled();
        this.emailField.setValue(userData.email);
        this.passwordField.waitForEnabled();
        this.passwordField.setValue(userData.password);
        this.confirmPasswordField.waitForEnabled();
        this.confirmPasswordField.setValue(userData.password);
        this.selectRole(userData.GuestRole);
        this.createButton.click();
    }

    editUser(userData) {
        this.editButton.waitForDisplayed();
        this.editButton.click();
        this.nameField.waitForDisplayed();
        this.nameField.waitForEnabled();
        this.nameField.setValue(userData.changename);
        this.emailField.waitForEnabled();
        this.emailField.setValue(userData.changeemail);
        this.passwordField.setValue(userData.changepassword);
        this.confirmPasswordField.setValue(userData.changepassword);
        this.saveButton.click();
    }

    deleteUser() { 
        this.deleteButton.waitForDisplayed();
        this.deleteButton.click(); 
        this.confirmDeletePopup.waitForDisplayed();
        this.confirmDeletePopup.click();
    }

    searchUser(ChangedUserDatas) {
        this.searchField.waitForEnabled();
        this.searchField.setValue(ChangedUserDatas.name);
    }
}
export default new UsersPage();
