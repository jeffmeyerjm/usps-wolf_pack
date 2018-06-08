/* Page Objects for the "Look Up ZIP Code by City & State" screen on USPS website
   
   DevMountain QA Immersive Group Project (May - June 2018)
   Author: Joep Claessens
   Date: June 8, 2018

*/
module.exports = {
    url: 'https://tools.usps.com/zip-code-lookup.htm?bycitystate',
    elements: {
        pageTitlebcs   : {selector: '(//h2[contains(text(), "ZIP Code™ by City and State")])[0]',
                           locateStrategy: 'xpath'},         // "ZIP Code by City and State" Page Title
        cityInputbcs   :  'input[id="tCity-city-state"]',    // City (input field)
        stateInputbcs  :  'select[id="tState-city-state"]',  // State (dropdown input field)
        findBtnbcs     :  'a[id="zip-by-city-and-state"]',   // FIND button
                }
}