class AppVersionsPage {
    openPage() {
        browser.url('/app-versions');
    }

    get titleElement() {
        return $('//*[@id="root"]/main/div/div[1]/h5[text()="App Versions"]');
    }
}
export default new AppVersionsPage();
