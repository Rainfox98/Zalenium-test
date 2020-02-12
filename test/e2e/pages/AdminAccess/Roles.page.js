
class RolesPage {
    get addNewButton() {
        return $('//*[@id="root"]/main/div/div[1]/div/button');
    }

    get nameField() {
        return $('//*[@id="root"]/main/div/div/form/div[1]/div/div/input');
    }

    get descriptionField() {
        return $('//*[@id="root"]/main/div/div/form/div[2]/div/div/input');
    }


    get editButton() {
        return $(
            '//*[@id="root"]/main/div/div[2]/table/tbody/tr[1]/td[4]/button[1]',
        );
    }

    get deleteButton() {
        return $(
            '//*[@id="root"]/main/div/div[2]/table/tbody/tr[1]/td[4]/button[2]',
        );
    }

    get searchField() {
        return $('//*[@id="outlined-dense"]');
    }

    get elementTitle() {
        return $('//*[@id="root"]/main/div/div[1]/h5[text()="Roles"]');
    }

    get createButton() {
        return $('//*[@id="root"]/main/div/div/form/div[4]/button[1]');
    }

    get saveButton() {
        return $('//*[@id="root"]/main/div/div/form/div[4]/button[1]');
    }

    get createdRole() {
        return $('//*[text()="Jotaro Kujo"]');
    }

    get confirmDeletePopup() {
        return $('/html/body/div[2]/div[3]/div/div/div/button[1]/span[1]');
    }

    get createRoleMessage() {
        return $('//*[contains(text(), "Role successfully created")]');
    }

    get deleteRoleMessage() {
        return $('//*[contains(text(), "Role successfully deleted")]');
    }

    get editRoleMessage() {
        return $('//*[contains(text(), "Role successfully edited")]');
    }

    selectRolePermission(permissionName) {
        $(`//*[@name="${permissionName}"]`).click();
    }

    addNewRole(roleData) {
        this.addNewButton.waitForDisplayed();
        this.addNewButton.click();
        this.nameField.waitForDisplayed();
        this.nameField.waitForEnabled();
        this.nameField.setValue(roleData.name);
        this.descriptionField.setValue(roleData.description);
        this.selectRolePermission(roleData.readRolepermission);
        this.createButton.click();
    }

    editRoles(roleData) {
        this.editButton.waitForDisplayed();
        this.editButton.click();
        this.selectRolePermission(roleData.createRolepermission);
        this.SaveButton.click();
    }

    searchRoles(roleName) {
        this.searchField.waitForDisplayed();
        this.searchField.waitForEnabled();
        this.searchField.setValue(roleName);
    }

    deleteRoles() {
        this.deleteButton.waitForDisplayed();
        this.deleteButton.click();
        this.ConfirmDeletePopup.waitForDisplayed();
        this.ConfirmDeletePopup.click();
    }
}
export default new RolesPage();
