class CarTypesPage {
    openPage() {
        browser.url('/car-types');
    }

    get titleElement() {
        return $('//*[@id="root"]/main/div/div[1]/h5[text()="Car Types"]');
    }
}
export default new CarTypesPage();
