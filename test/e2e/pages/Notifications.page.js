class NotificationsPage {
    openPage() {
        browser.url('/notifications');
    }

    get titleElement() {
        return $('//*[@id="root"]/main/div/h5');
    }
}
export default new NotificationsPage();
