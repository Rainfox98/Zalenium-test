class BranchesPage {
    openPage() {
        browser.url('/branches');
    }

    get titleElement() {
        return $('//*[@id="root"]/main/div/div[1]/h5');
    }
}
export default new BranchesPage();
