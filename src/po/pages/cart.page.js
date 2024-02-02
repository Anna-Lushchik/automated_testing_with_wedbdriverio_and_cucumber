import { browser, $, $$, expect } from '@wdio/globals';
import BasePage from './base.page.js';

export default class CartPage extends BasePage {

    get productItems() {
        return $$('.success');
    }

    get title() {
        return $$('//td[2]');
    }
}