import { yandex } from '../pages';
import { yandexValidator} from '../validators';

describe("test parallel runing tests", ()=>{
    before(()=>{
        browser.url('https://yandex.ru/');
    })
    it("open yandex page and enter search request", ()=>{
        yandex.fillin();
        yandexValidator.checkYandexPage();
    })
})