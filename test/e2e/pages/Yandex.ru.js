class YandexHome {

    get searchField() {
        return $('//*[@id="text"]');
    }

    get searchButton(){
        return $('/html/body/div[2]/div[2]/div[3]/div/div[2]/div/fwap/fgn/div/div[2]/div/div[2]/div/form/div[2]/button');
    }

    fillin() {
        this.searchField.waitForEnabled();
        this.searchField.setValue("Angel Vivaldi");
        this.searchButton.click();
    }
}
export default new YandexHome();