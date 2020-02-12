class BlockReasonPage {
    openPage() {
        browser.url('/block-reason');
    }

    get titleElement() {
        return $('//*[@id="root"]/main/div/div[1]/h5[text()="Block Reason"]');
    }
}
export default new BlockReasonPage();
