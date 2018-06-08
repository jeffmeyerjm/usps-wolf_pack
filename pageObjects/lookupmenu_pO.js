/* Page Objects for the "Look Up ZIP Code" main menu on USPS website
   
   DevMountain QA Immersive Group Project (May - June 2018)
   Author: Joep Claessens
   Date: June 8, 2018

*/
module.exports = {
    url: 'https://tools.usps.com/go/ZipLookupAction_input',
    elements: {
        mmpageTitle     : {selector: '(//h1[contains(text(), "Look Up a ZIP Code")])[1]',
                            locateStrategy: 'xpath'},     // "Look Up a ZIP Code" Page Title
        byaddressBtnmm  : {selector: '//a[@title="byaddress" and role="button"]',
                            locateStrategy: 'xpath'},     // Look Up "ZIP by Address" button
        citybyzipBtnmm  : {selector: '//a[@data-location="citybyzipcode" and role="button"]',
                            locateStrategy: 'xpath'},     // Look Up "City by ZIP Code" button
        zipbycitystateBtnmm : {selector: '//a[@data-location="bycitystate" and role="button"]',
                            locateStrategy: 'xpath'},     // Look Up ZIP by City/State" button
                }
}