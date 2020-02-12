class CarModelsPage {
    openPage() {
        browser.url('/car-models');
    }

    get titleElement() {
        return $('//*[@id="root"]/main/div/div[1]/h5[@text()="Car Models"]');
    }
}
export default new CarModelsPage();
