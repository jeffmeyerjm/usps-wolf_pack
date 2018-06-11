var trackPackage = {}

let singleTest = (trackPackage, trackingNumber, trackingNumber2) => {
    trackPackage
        .setValue('@trackInputField', trackingNumber)
        .click('@trackButton')
        .verify.containsText('@trackResults1', trackingNumber)
        .verify.visible('@textResults1')
        .click('@trackAnotherPackage')
        .setValue('@trackInputField', trackingNumber2)
        .click('@trackButton')
        .verify.containsText('@trackResults1', trackingNumber2)
        .verify.visible('@textResults1')
        .click('@trackAnotherPackage')
        .api.pause(3000)
}
let multiTest = (trackPackage, multiNumber,part1,part2) => {
    trackPackage
        .setValue('@trackInputField', multiNumber)
        .click('@trackButton')
        .verify.containsText('@trackResults1',part1)
        .verify.containsText('@trackResults2',part2)
        .click('@trackAnotherPackage')
       
}


module.exports = {
    beforeEach: browser => {
        trackPackage = browser.page.trackPackage()
        browser.url('https://tools.usps.com/go/TrackConfirmAction_input')
        browser.waitForElementPresent('body', 5000, 'Checking for page to be loaded.')


    },
    after: browser => {
        browser.end()
    },
    'Single Valid Tracking ID': browser => {

        singleTest(browser.page.trackPackage(), '9114901496451334319746', '9114901496451334319739')

    },
    'Multiple Valid Tracking ID': browser => {

        multiTest(browser.page.trackPackage(),'9114901496451334319746, 9114901496451334319739','9114901496451334319746','9114901496451334319739' )
    },

 

}