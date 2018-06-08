/* Page Objects for the "Look Up ZIP Code by Address" screen on USPS website
   
   DevMountain QA Immersive Group Project (May - June 2018)
   Author: Joep Claessens
   Date: June 8, 2018

*/
module.exports = {
    url: 'https://tools.usps.com/zip-code-lookup.htm?byaddress',
    elements: {
        pageTitleba     : {selector: '(//h2[contains(text(), "ZIP Code™ by Address")])[1]',
                            locateStrategy: 'xpath'},   // "ZIP Code by Address" Page Title
        companyInputba  :  'input[id="tCompany"]',      // Company (input field)
        streetInputba   :  'input[id="tAddress"]',      // street address (input field)
        cityInputba     :  'input[id="tCity"]',         // city (input field)
        zipInputba      :  'input[id="tZip-byaddress"]',// ZIP Code (input field)
        aptInputba      :  'input[id="tApt"]',          // Apt/Suite/Other
        stateInputba    :  'select[id="tState"]',       // State  (dropdown input field)
        findBtnba       :  'a[id="zip-by-address"]',    // FIND button
                }
}