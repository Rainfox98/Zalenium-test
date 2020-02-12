class ReportsPage {
    openPage() {
        browser.url('/reports');
    }

    get titleElement() {
        return $('//*[@id="root"]/main/div/div[1]/h5[text()="Reports"]');
    }
}
export default new ReportsPage();
