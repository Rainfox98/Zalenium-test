class PromoCodesPage {
    openPage() {
        browser.url('/promo-codes');
    }

    get titleElement() {
        return $('//*[@id="root"]/main/div/h5');
    }
}
export default new PromoCodesPage();
