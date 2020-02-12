class CarModelsListPage {
    openPage() {
        browser.url('/car-models-list');
    }

    get titleElement() {
        return $(
            '//*[@id="root"]/main/div/div[1]/h5[text()="Car Models List"]'
        );
    }
}
export default new CarModelsListPage();
