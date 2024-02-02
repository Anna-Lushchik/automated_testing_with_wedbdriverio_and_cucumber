import { browser } from '@wdio/globals'
import HeaderComponent from '../components/header.component.js';

export default class BasePage {
    homePageUrl = "https://demoblaze.com/index.html";

    constructor() {
        this.header = new HeaderComponent();
    }

    open () {
        return browser.url(this.homePageUrl);
    }
}