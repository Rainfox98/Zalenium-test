class TypesPage {
    openPage() {
        browser.url('/types');
    }

    get titleElement() {
        return $('//*[@id="root"]/main/div/div[1]/h5[text()="Types"]');
    }
}
export default new TypesPage();
