class CardLocationsPage {
    openPage() {
        browser.url('/card-locations');
    }

    get titleElement() {
        return $('//*[@id="root"]/main/div/div[1]/h5[@text()="Card Location"]');
    }
}
export default new CardLocationsPage();
