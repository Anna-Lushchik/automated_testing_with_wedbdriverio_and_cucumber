import { Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals'
import logger from '@wdio/logger'

import compareText from './utils/compare-text.js';
import ContactDialog from '../po/components/dialogs/contact.dialog.js'
import HomePage from '../po/pages/home.page.js';
import ProductPage from '../po/pages/product.page.js';
import HeaderComponent from '../po/components/header.component.js';
import CartPage from '../po/pages/cart.page.js';

const log = logger('internal');

const pages = {
    home: new HomePage(),
    header: new HeaderComponent(),
    contactDialog: new ContactDialog(),
    product: new ProductPage(),
    cart: new CartPage()
}

let itemTitleOnSearchResultsPage;
let itemNumberOnSearchResultsPage = 0;

Then('Contact dialog title should {string} {string}', async function(shouldBeParametr, titleText) {
    await pages['contactDialog'].title.waitForDisplayed();
    const dialogTitle = pages['contactDialog'].title;
    return compareText(await (dialogTitle).getText(), titleText, shouldBeParametr);
});

Then('Contact dialog should {string} field title {string}', async function(shouldBeParametr, fieldTitleText) {
    const fieldTitle = await pages['contactDialog'].fieldTitle(fieldTitleText);
    return compareText(fieldTitle, fieldTitleText, shouldBeParametr);
});

Then('On contact dialog {string} field is displayed', async function(field) {
    return await pages['contactDialog'].fieldIsDisplayed(field);
});

Then('On contact dialog Close button is displayed', async function() {
    return await pages['contactDialog'].closeButton.isDisplayed();
});

Then('On contact dialog Send Message button is displayed', async function() {
    return await pages['contactDialog'].sendMessageButton.isDisplayed();
});

Then('On contact dialog x-close button is displayed', async function() {
    return await pages['contactDialog'].xCloseButton.isDisplayed();
});

Then('Product items is displayed on the result table and their number is more than 0', async function() {
    itemTitleOnSearchResultsPage = await pages['home'].title[itemNumberOnSearchResultsPage].getText();
    const items = await pages['home'].productItems;
    return items.isDisplayed && expect(items.length).toBeGreaterThan(0);
});

Then('Product title is displayed', async function() {
    return await pages['product'].productTitle.isDisplayed();
});

Then('Product title should {string} product title from the result table', async function(shouldBeParametr) {
    const productTitle = await pages['product'].productTitle.getText();
    return compareText(productTitle, itemTitleOnSearchResultsPage, shouldBeParametr);
});

Then('Product image is displayed', async function() {
    return await pages['product'].productImage.isDisplayed();
});

Then('Cart items count should {string} {int}', async function(shouldBeParametr, itemsCount) { 
    const items = await pages['cart'].productItems;
    return compareText(items.length, itemsCount, shouldBeParametr);
});

Then('Cart item title should {string} product title from the result table', async function(shouldBeParametr) {
    const itemTitle = await pages['cart'].title[itemNumberOnSearchResultsPage].getText();
    return compareText(itemTitle, itemTitleOnSearchResultsPage, shouldBeParametr);
});