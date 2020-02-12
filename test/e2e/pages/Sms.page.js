class SmsPage {
    openPage() {
        browser.url('/sms');
    }

    get titleElement() {
        return $('//*[@id="root"]/main/div/h5');
    }
}
export default new SmsPage();
