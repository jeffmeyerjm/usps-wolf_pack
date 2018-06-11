var editSignedInFunc = require('../Functions/editSignedInFunc')
var signedInFunc = require('../Functions/signedInFunc')
var signIn = {}

// To RUN THIS TEST USE "nightwatch -e firefox"

module.exports = {
    url: 'https://www.usps.com/',
    beforeEach: browser => {
        signIn = browser.page.signIn()
        signIn.navigate()
            .waitForElementPresent('@signInPageButton', 5000, 'Waiting 5 secs for the page to load.')
    },
    after: browser => {
        browser.end()

    },
    'Sign-in to Account from Homepage': browser => {
        signedInFunc(browser.page.signIn())
        browser.end()
   
    },
    'Sign-in using excess characters' : browser => {
            editSignedInFunc(signIn, 'jeffsoftqaihopethisthinglandsmeajobcomeonuspsplease', '')
            signIn
            .verify.value( '@usernameInput', 'jeffsoftqaihopethisthinglandsmeajobcomeonuspspleas' , 'Limit of 50 Characters Reached')
   
   
   
   
   
   
   
   
   
    },
    'Sign out of Account by MOUSING and click Sign out': browser => {
        signedInFunc(browser.page.signIn())
           signIn
           .moveToElement('@signInName', 0, 0)
           .click('@signOutButton')
            .verify.elementPresent('@signOutHeadline', 2000)
            signIn.waitForElementPresent('@signInPageButton', 7000)
    },
    'Sign out of Account by clicking Hi, Jeff': browser => {
        signedInFunc(browser.page.signIn())
           signIn
           .click('@signInName')
            .verify.elementPresent('@signOutHeadline', 2000)
            signIn.waitForElementPresent('@signInPageButton', 7000)
    }

}
