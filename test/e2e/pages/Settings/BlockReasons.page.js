class BlockReasonsPage {
    openPage() {
        browser.url('/block-reasons');
    }

    get titleElement() {
        return $('//*[@id="root"]/main/div/div[1]/h5[@text()="Block Reasons"]');
    }
}
export default new BlockReasonsPage();
