class ClientBlockPage {
    openPage() {
        browser.url('/client-block');
    }

    get titleElement() {
        return $('//*[@id="root"]/main/div/h5');
    }
}
export default new ClientBlockPage();
