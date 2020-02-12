class MapViewPage {
    openPage() {
        browser.url('/drivers-map');
    }

    get titleElement() {
        return $('//*[@id="root"]/main/div/h5');
    }
}
export default new MapViewPage();
