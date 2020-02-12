class FaqPage {
    openPage() {
        browser.url('/faq');
    }

    get titleElement() {
        return $('//*[@id="root"]/main/div/div[1]/h5[@text()="FAQ"]');
    }
}
export default new FaqPage();
