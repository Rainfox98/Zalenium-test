class ComplaintsPage {
    openPage() {
        browser.url('/complaints');
    }

    get titleElement() {
        return $('//*[@id="root"]/main/div/div[1]/h5[text()="Complaints"]');
    }
}
export default new ComplaintsPage();
