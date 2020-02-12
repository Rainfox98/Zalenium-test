class CompaniesPage {
    openPage() {
        browser.url('/companies');
    }

    get addNewButton() {
        return $('//*[@id="root"]/main/div/div[1]/div/button');
    }

    get searchField() {
        return $('//*[@id="outlined-dense"]');
    }

    get editButton() {
        return $(
            '//*[@id="root"]/main/div/div[2]/table/tbody/tr[1]/td[7]/button[1]'
        );
    }

    get deleteButton() {
        return $();
    }

    get nameField() {
        return $('//*[@id="root"]/main/div/div/form/div[1]/div/div/input');
    }

    get companyShareField() {
        return $('//*[@id="root"]/main/div/div/form/div[2]/div/div/input');
    }

    get messageField() {
        return $('//*[@id="root"]/main/div/div/form/div[3]/div/div/input');
    }

    get driverPercentageField() {
        return $('//*[@id="root"]/main/div/div/form/div[4]/div/div/input');
    }

    get selectRegionField() {
        return $('//*[@id="select-regionId"]');
    }

    get chosenRole() {
        return $('//*[@id="menu-regionId"]/div[3]/ul/li[2]');
    }

    get createButton() {
        return $('/html/body/div/main/div/div/form/button[1]');
    }

    get createdCompany() {
        return $(
            '//*[@id="root"]/main/div/div[2]/table/tbody/tr[1]/td[@text()="Fund of Speedwaugon"]',
        );
    }

    get confirmationPopup() {
        return $('/html/body/div[2]/div[3]/div/div/div/button[1]');
    }

    get titleElement() {
        return $('//*[@id="root"]/main/div/div[1]/h5[text()="Companies"]');
    }

    get saveButton() {
        return $('//*[@id="root"]/main/div/div/form/button[1]');
    }

    get editedCompany() {
        return $(
            '//*[@id="root"]/main/div/div[2]/table/tbody/tr[1]/td[@text()="Fund of Speedwaugonqwe"]',
        );
    }

    get createCompanyMessage() {
        return $('//*[contains(text(), "Company successfully created")]');
    }



    createCompany(companyData) {
        this.addNewButton.waitForDispalyed();
        this.addNewButton.click();
        this.nameField.waitForDispalyed();
        this.nameField.waitForEnabled();
        this.nameField.setValue(companyData.name);
        this.companyShareField.setValue(companyData.companyShare);
        this.messageField.setValue(companyData.message);
        this.driverPercentageField.setValue(companyData.Driverpercentage);
        this.selectRegionField.click();
        this.chosenRole.click();
        this.createButton.click();
    }

    editCompany(companyData) {
        this.editButton.waitForDispalyed();
        this.editButton.click();
        this.nameField.waitForDispalyed();
        this.NameField.waitForEnabled();
        this.NameField.setValue(companyData.changedname);
        this.CompanyShareField.setValue(companyData.changedcompanyShare);
        this.SaveButton.click();
    }

    deleteCompany() {
        this.DeleteButton.click();
        this.ConfirmationPopup.waitForDispalyed();
        this.ConfirmationPopup.click();
    }
}
export default new CompaniesPage();
