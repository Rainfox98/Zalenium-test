class AuditPage {
    openPage() {
        browser.url('/audit');
    }

    get titleElement() {
        return $('//*[@id="root"]/main/div/h5');
    }
}
export default new AuditPage();
