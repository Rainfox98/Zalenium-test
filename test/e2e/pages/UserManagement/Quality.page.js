class QualityPage {
    openPage() {
        browser.url('/quality');
    }

    get titleElement() {
        return $('//*[@id="root"]/main/div/div[1]/h5[text()="Quality"]');
    }
}
export default new QualityPage();
