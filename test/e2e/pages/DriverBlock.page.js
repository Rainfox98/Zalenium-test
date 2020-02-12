class DriverBlockPage {
    openPage() {
        browser.url('/driver-block');
    }

    get titleElement() {
        return $('//*[@id="root"]/main/div/h5');
    }
}
export default new DriverBlockPage();
