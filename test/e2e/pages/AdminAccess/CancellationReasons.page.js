class CancellationReasonsPage {
    openPage() {
        browser.url('/cancellation-reasons');
    }

    get titleElement() {
        return $(
            '//*[@id="root"]/main/div/div[1]/h5[@text()="Cancellation Reasons"]',
        );
    }
}
export default new CancellationReasonsPage();
