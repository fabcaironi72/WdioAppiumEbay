const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class resultsPage extends Page {
    /**
     * define selectors using getter methods
     */
    get resultsFound () { return $('//*[@class="srp-controls__control srp-controls__count"]') }

    getResultsNumber(){
        var arrText = this.resultsFound.getText().split(" ")
        return arrText[0];
    }
}

module.exports = new resultsPage();