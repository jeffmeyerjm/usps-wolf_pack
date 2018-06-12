/* Test Script for the "Look Up ZIP Code by Address" webpage on the USPS website
   JIRA Test Script [Q5Y-30]

   DevMountain QA Immersive Group Project (May - June 2018)
   Author: Joep Claessens
   Date: June 11, 2018

*/
const testData = require('../test-data/data')
const fillsearchItems = require('../Functions/fillSearchcriteria')
var lookupbyaddressPo = {}
module.exports = {
    beforeEach: browser => {
        lookupbyaddressPo = browser.page.lookupbyaddressPo()
        lookupbyaddressPo.navigate()
        lookupbyaddressPo
            .waitForElementPresent('body', 5000, 'Waiting 5 secs for the page to load.')
            .verify.visible('@pageTitleba')
            .verify.containsText('@pageTitleba', 'ZIP Code™ by Address')
    },
    after: browser => {
        browser.end()
    },
    'Test error message 1 - no address entered': browser => {
    //  Check error message "Please enter an address."
            fillsearchItems(lookupbyaddressPo,testData.noaddressError)
        lookupbyaddressPo
            .click('@findBtnba')
            .click('body')
            .waitForElementPresent('@errorMsg1ba',5000,'Waiting 5 secs for error msg')
            .verify.visible('@errorMsg1ba')
            .verify.containsText('@errorMsg1ba', 'Please enter an address.')
    },
    'Test error messages 2 & 3 - no city and state entered': browser => {
    //  Check error messages "Please enter a city." and "Please select a state."
            fillsearchItems(lookupbyaddressPo,testData.nocitystateError)
        lookupbyaddressPo
            .click('@findBtnba')
            .waitForElementPresent('@errorMsg2ba',5000,'Waiting 5 secs for error msg')
            .verify.visible('@errorMsg2ba')
            .verify.containsText('@errorMsg2ba', 'Please enter a city.')
            .verify.visible('@errorMsg3ba')
            .verify.containsText('@errorMsg3ba', 'Please select a state.')
    },
    'Test error messages 4 (under city field) - invalid address': browser => {
    //  Check error messages "Unfortunately, this information wasn..."
            fillsearchItems(lookupbyaddressPo,testData.invalidstateError)
        lookupbyaddressPo
            .click('@findBtnba')
            .click('body')
            .waitForElementVisible('@errorMsg4ba',5000,'Waiting 5 secs for error msg')
            .verify.visible('@errorMsg4ba')
            .verify.containsText('@errorMsg4ba', 'Unfortunately, this information wasn')
    },
        'Test error messages 5 (under street address) - invalid address': browser => {
    //  Check error messages "Unfortunately, this information wasn..."
            fillsearchItems(lookupbyaddressPo,testData.invalidstreetError)
        lookupbyaddressPo
            .click('@findBtnba')
            .waitForElementVisible('@errorMsg5ba',5000,'Waiting 5 secs for error msg')
            .verify.visible('@errorMsg5ba')
            .verify.containsText('@errorMsg5ba', 'Unfortunately, this information wasn')
    },
        'Find a ZIP Code (valid address)': browser => {
 //  Find a ZIP and check result screen
            fillsearchItems(lookupbyaddressPo,testData.validAddress)
        lookupbyaddressPo
            .click('@findBtnba')
            .click('body')
            .waitForElementVisible('@searchAnewba',5000,'Waiting 5 secs for error msg')
            .verify.visible('@searchAnewba')
            .verify.visible('@editSearchba')
            .verify.visible('@zipResultba')
            .verify.containsText('@zipResultba','84111-2707')
    },
    'Find a ZIP Code and return to Search page to edit Search': browser => {
        //  Search and find a ZIP code
        //  Click "Edit and Search Again"
        //  All search items should still be present
            fillsearchItems(lookupbyaddressPo,testData.validAddress)
        lookupbyaddressPo
            .click('@findBtnba')
            .waitForElementVisible('@searchAnewba',5000,'Waiting 5 secs for result screen')
            .click('@editSearchba')
            .waitForElementPresent('@pageTitleba', 5000, 'Waiting 5 secs for the page to load.')
            .click('body')
            .verify.visible('@pageTitleba')
            .verify.containsText('@pageTitleba', 'ZIP Code™ by Address')
            .verify.visible('@companyInputba')
            .verify.value('@companyInputba', 'DevMountain')
            .verify.value('@streetInputba', '341 Main Street')
            .verify.value('@cityInputba', 'Salt Lake City')
            .verify.value('@stateInputba', 'UT')
    },
    'Find a ZIP Code and return to Search page to search anew': browser => {
        //  Search and find a ZIP code
        //  Click "Look Up Another ZIP Code"
        //  Return to Search page and all search items should be emptied
            fillsearchItems(lookupbyaddressPo,testData.validAddress)
        lookupbyaddressPo
            .click('@findBtnba')
            .waitForElementVisible('@searchAnewba',5000,'Waiting 5 secs for result screen')
            .click('@searchAnewba')
            .waitForElementPresent('@pageTitleba', 5000, 'Waiting 5 secs for the page to load.')
            .verify.visible('@pageTitleba')
            .verify.containsText('@pageTitleba', 'ZIP Code™ by Address')
            .verify.value('@companyInputba', '')
            .verify.value('@streetInputba', '')
            .verify.value('@cityInputba', '')
            .verify.value('@stateInputba', '')
    }
 }