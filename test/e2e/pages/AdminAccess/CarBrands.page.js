class CarBrandsPage {
    openPage() {
        browser.url('/car-brands');
    }

    get addNewButton(){
        return $('//*[@id="root"]/main/div/div[1]/div/button');
    }

    get editButton(){
        return $('//*[@id="root"]/main/div/div[2]/table/tbody/tr[1]/td[2]/button[1]');
    }

    get deleteButton(){
        return $('//*[@id="root"]/main/div/div[2]/table/tbody/tr[1]/td[2]/button[2]');
    }

    get nameField(){
        return $('//*[@id="root"]/main/div/div/form/div[1]/div/input');
    }

    get createButton(){
        return $('//*[@id="root"]/main/div/div/form/div[2]/button[1]');
    }

    get saveButton(){
        return $('//*[@id="root"]/main/div/div/form/div[2]/button[1]');
    }

    get nextPageButton(){
        return $('//*[@id="root"]/main/div/div[2]/div/div/div[3]/button[2]');
    }

    get titleElement() {
        return $('//*[@id="root"]/main/div/div[1]/h5[@text()="Car Brands"]');
    }

    createCarBrand(carBrandData){
        this.addNewButton.click();
        this.nameField.waitForEnabled();
        this.nameField.setValue(carBrandData.name);
        this.createButton.waitForVisible();
        this.createButton.click();
    }

    editCarBrand(carBrandData){
        this.editButton.clik();
        this.nameField.waitForEnabled();
        this.nameField.setValue(carBrandData.newname);
        this.saveButton.waitForVisible();
        this.saveButton.click();
    }

    finalPage(){

    }
}
export default new CarBrandsPage();
