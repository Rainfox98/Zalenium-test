class RegionsPage {
    openPage() {
        browser.url('/regions');
    }

    get titleElement() {
        return $('//*[@id="root"]/main/div/div[1]/h5');
    }
}
export default new RegionsPage();
