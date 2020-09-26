const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class mainPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputSearch() { return $('#gh-ac') }
    get btnSearch() { return $('#gh-btn') }

    /**
     * a method to encapsule automation code to interact with the page
     */
    completeSearchBox(itemToSearch) {
        this.inputSearch.setValue(itemToSearch);
    }

    clickSearch(){
        this.btnSearch.click();
    }
    /**
     * overwrite specifc options to adapt it to page object
     */
    open() {
        return super.open();
    }
}

module.exports = new mainPage();
