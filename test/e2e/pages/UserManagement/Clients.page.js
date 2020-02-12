class ClientsPage {
    openPage() {
        browser.url('/clients');
    }

    get titleElement() {
        return $("//*[@id='root']/main/div/div[1]/h5");
    }
}
export default new ClientsPage();
