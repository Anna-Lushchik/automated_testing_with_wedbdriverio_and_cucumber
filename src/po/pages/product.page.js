import { browser, $, $$, expect } from '@wdio/globals';
import BasePage from './base.page.js';

export default class ProductPage extends BasePage {

    get productTitle(){
        return $('.name');
    }

    get productImage(){
        return $('.item > img');
    }

    get addToCartButton(){
        return $('.btn-success');
    }
}