class SettingsPage {
    openPage() {
        browser.url('/settings');
    }

    get titleElement() {
        return $('//*[@id="root"]/main/div/div[1]/h5[text()="Settings"]');
    }
}
export default new SettingsPage();
