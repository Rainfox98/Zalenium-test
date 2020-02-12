class RequestsPage {
    openPage() {
        browser.url('/requests');
    }

    get titleElement() {
        return $('//*[@id="root"]/main/div/div[1]/h5[@text()="Requests"]');
    }
}
export default new RequestsPage();
