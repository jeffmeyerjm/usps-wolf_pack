/* Page Objects for the "Look Up Cities by ZIP Code" on USPS website
   
   DevMountain QA Immersive Group Project (May - June 2018)
   Author: Joep Claessens
   Date: June 8, 2018

*/
module.exports = {
    url: 'https://tools.usps.com/zip-code-lookup.htm?citybyzipcode',
    elements: {
        pageTitle1cbz    : {selector: '(//h2[contains(text(), "Cities by ZIP Code™")])[0]',
                            locateStrategy: 'xpath'},     // "Look Up a City by ZIP Code" Search Page
        zipInputcbz     : 'input[id="tZip"]',             // ZIP (input field)
        citybyzipBtncbz : 'a[id="cities-by-zip-code"]',   // Find button
        errorMsgcbz     : 'div[class="server-error cities-by-zipcode-tZip help-block"]',
                                                          // You did not enter a valid ZIP Code
        warningMsgcbz   : {selector:  '//p[@style="margin-bottom:20px;"]',
                            locateStrategy: 'xpath'},     // APO/FPO/DPO ZIP Code
        pageTitle2cbz   : {selector: '(//h2[contains(text(), "Cities by ZIP Code™")])[1]',
                            locateStrategy: 'xpath'},     // "Look Up a City by ZIP Code" Results Page
        cityResultcbz   : {selector: '(//p[@class="row-detail-wrapper"])[1]',
                            locateStrategy: 'xpath'},     // Result: official city name
    }
}