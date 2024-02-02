import { $, $$ } from '@wdio/globals'
import BasePage from './base.page.js';
import SideCategoriesMenu from '../components/menu/side_categories.menu.js';

export default class HomePage extends BasePage {

    constructor() {
        super();
        this.categoriesMenu = new SideCategoriesMenu();
    }

    get productItems() {
        return $$('.card');
    }

    get title() {
        return $$('.hrefch');
    }
}