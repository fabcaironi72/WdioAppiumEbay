import { Given, When, Then } from 'cucumber';

const mainPage = require('../../dev/pages/mainPage');
const resultsPage = require('../../dev/pages/resultsPage');

Given(/^I open the eBay URL$/, function () {
    mainPage.open(),
    expect(mainPage.inputSearch).toBeExisting()
});

When(/^I search for Pilas$/, function () {
    mainPage.completeSearchBox('rodillos')
});

When(/^I click the search button$/, function () {
    mainPage.clickSearch()
});

Then(/^I print the number of items found to the console$/, function () {
    console.log('NÚMERO DE ITEMS DEVUELTO: ' + resultsPage.getResultsNumber())
});