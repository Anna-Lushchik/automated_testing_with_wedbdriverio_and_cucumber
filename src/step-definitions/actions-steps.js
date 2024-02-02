import { Given, When } from '@wdio/cucumber-framework';
import { browser } from '@wdio/globals'

import HomePage from '../po/pages/home.page.js';
import ProductPage from '../po/pages/product.page.js';
import HeaderComponent from '../po/components/header.component.js';
import SideCategoriesMenu from '../po/components/menu/side_categories.menu.js';

const pages = {
    home: new HomePage(),
    header: new HeaderComponent(),
    product: new ProductPage(),
    categoriesMenu: new SideCategoriesMenu()
}

Given(/^I open (\w+) page$/, async (page) => {
    await pages[page].open();
});

When(/^I click (\w+) link in the header from (\w+) page$/, async function (headerLink, page) {
    await pages[page].header.item(headerLink).click();
    return browser.pause(1000);
});

When(/^I click (\w+) link in the side categories menu$/, async function (link) {
    await pages['home'].categoriesMenu.item(link).click();
    return browser.pause(1000);
});

When(/^I click on (-?\d+) item from the result table$/, async function (itemId) {
    return await pages['home'].productItems[itemId - 1].click();
});

When("I click on Add to cart button", async function () {
    return await pages['product'].addToCartButton.click();
});