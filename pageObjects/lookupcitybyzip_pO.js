/* Page Objects for the "Look Up Cities by ZIP Code" on USPS website
   
   DevMountain QA Immersive Group Project (May - June 2018)
   Author: Joep Claessens
   Date: June 8, 2018

*/
module.exports = {
    url: 'https://tools.usps.com/zip-code-lookup.htm?citybyzipcode',
    elements: {
        pageTitlecbz    : {selector: '(//h2[contains(text(), "Cities by ZIP Code™")])[0]',
                            locateStrategy: 'xpath'},     // "Look Up a City by ZIP Code" Page Title
        zipInputcbz     : 'input[id="tZip"]',             // ZIP (input field)
        citybyzipBtncbz : 'a[id="cities-by-zip-code"]',   // Look Up "City by ZIP Code" button
    }
}