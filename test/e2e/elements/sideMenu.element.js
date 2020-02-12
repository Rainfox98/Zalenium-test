class SideMenuElement {
    get roles() {
        return $('//*[@id="panel1d-content"]/div/div[1]');
    }

    get users() {
        return $('//*[@id="panel1d-content"]/div/div[2]');
    }

    get serviceTypes() {
        return $('//*[@id="panel1d-content"]/div/div[3]');
    }

    get companies() {
        return $('//*[contains(text(), "Companies")]');
    }

    get carModels() {
        return $('//*[@id="panel1d-content"]/div/div[5]');
    }

    get carBrands() {
        return $('//*[@id="panel1d-content"]/div/div[6]');
    }

    get carTypes() {
        return $('//*[@id="panel1d-content"]/div/div[7]');
    }

    get blockReasons() {
        return $('//*[@id="panel1d-content"]/div/div[8]');
    }

    get invitationCodes() {
        return $('//*[@id="panel1d-content"]/div/div[9]');
    }

    get cancellationReasons() {
        return $('//*[@id="panel1d-content"]/div/div[10]');
    }

    get faq() {
        return $('//*[@id="panel1d-content"]/div/div[11]');
    }

    get cardLocation() {
        return $('//*[@id="panel1d-content"]/div/div[12]');
    }

    get bonusPlan() {
        return $('//*[@id="panel1d-content"]/div/div[13]');
    }

    get userManagement() {
        return $(
            '//*[@id="panel1d-header"]/div[1]/p[text()="User Management"]',
        );
    }

    get clients() {
        return $('//*[@id="panel1d-content"]/div/div[text()="Clients"]');
    }

    get captains() {
        return $('//*[@id="panel1d-content"]/div/div[2]');
    }

    get requests() {
        return $('//*[@id="panel1d-content"]/div/div[text()="Requests"]');
    }

    get complaints() {
        return $('//*[@id="panel1d-content"]/div/div[text()="Complaints"]');
    }

    get quality() {
        return $('//*[@id="panel1d-content"]/div/div[text()="Quality"]');
    }

    get reports() {
        return $('//*[@id="panel1d-content"]/div/div[text()="Reports"]');
    }

    get mapView() {
        return $('//*[@id="root"]/div/div/div[3]');
    }

    get promoCodes() {
        return $('/html/body/div/div/div/div[4]');
    }

    get settingMenu() {
        return $('//*[@id="panel1d-header"]/div[1]/p[text()="Settings"]');
    }

    get setting() {
        return $('//*[@id="panel1d-content"]/div/div[text()="Settings"]');
    }

    get types() {
        return $('//*[@id="panel1d-content"]/div/div[2]');
    }

    get blockReason() {
        return $('//*[@id="panel1d-content"]/div/div[text()="Block Reason"]');
    }

    get appVersion() {
        return $('//*[@id="panel1d-content"]/div/div[text()="App Versions"]');
    }

    get carModelList() {
        return $(
            '//*[@id="panel1d-content"]/div/div[text()="Car Models List"]',
        );
    }

    get notifications() {
        return $('//*[@id="root"]/div/div/div[6]');
    }

    get sms() {
        return $('//*[@id="root"]/div/div/div[7]');
    }

    get driverBlock() {
        return $('//*[@id="root"]/div/div/div[8]');
    }

    get clientBlock() {
        return $('//*[@id="root"]/div/div/div[9]');
    }

    get auditPage() {
        return $('//*[@id="root"]/div/div/div[10]');
    }

    get branches() {
        return $('//*[@id="root"]/div/div/div[11]');
    }

    get regions() {
        return $('//*[@id="root"]/div/div/div[12]');
    }
    
    openCompanies(){
        this.companies.waitForDisplayed();
        this.companies.click();
    }

    openUsers(){
        this.users.waitForDisplayed();
        this.users.click();
    }


    openAdminAcess() {
        const adminAccessItem = $('//*[@id="panel1d-header"]/div[1]/p');
        adminAccessItem.waitForDisplayed()
        adminAccessItem.click();
        return this;
    }

    openRoles() {
        const rolesItem = $('//*[@id="panel1d-content"]/div/div[1]');
        rolesItem.waitForDisplayed()
        rolesItem.click();
        return this;
    }
}

export default new SideMenuElement();
