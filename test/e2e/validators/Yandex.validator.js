import { assert } from 'chai';
import { yandex } from '../pages';

class YandexValidation {
    checkYandexPage() {
        assert.equal(yandex.searchField.getText(), 'Angel Vivaldi');
    }
}

export default new YandexValidation();