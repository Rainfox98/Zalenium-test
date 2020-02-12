class ServiceTypesPage {
    openPage() {
        browser.url('/service');
    }

    get titleElement() {
        return $('//*[@id="root"]/main/div/div[1]/h5[@text()="Service Types"]');
    }
}
export default new ServiceTypesPage();
