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
        errorMsg1bcs   :  {selector: '(//div[contains(text(), "Unfortunately, this information wasn")])[5]',
                                locateStrategy: 'xpath'},
        errorMsg2bcs   :  {selector: '(//li[contains(text(), "Please enter a city.")])',
                                locateStrategy: 'xpath'},
        errorMsg3bcs   :  {selector: '(//li[contains(text(), "Please select a state.")])',
                                locateStrategy: 'xpath'},
        Warning1bcs   :  {selector: '(//p[text()="This ZIP Code™ used for a specific PO BOX"])[1]',
                                locateStrategy: 'xpath'},
        Warning2bcs   :  {selector: '(//p[text()="This ZIP Code™ used for a specific company or organization"])[1]',
                                locateStrategy: 'xpath'},
        zipResultbcs :  {selector: '//div[@id="zipByCityStateDiv"]',
                                locateStrategy: 'xpath'},   // 9-digit ZIP code found
        searchAnewbcs    :  'a[id="look-up-another-zip-code-by-citystate"]',
                                                            // Search again from scratch button
        editSearchbcs    :  {selector: '//a[@data-location="bycitystate" and role="button"]',
                                locateStrategy: 'xpath'},   // Edit search and search again
        }
}