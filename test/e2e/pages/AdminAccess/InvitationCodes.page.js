class InvitationCodesPage {
    openPage() {
        browser.url('/invitation-codes');
    }

    get titleElement() {
        return $(
            '//*[@id="root"]/main/div/div[1]/h5[@text()="Invitation Codes"]',
        );
    }
}
export default new InvitationCodesPage();
