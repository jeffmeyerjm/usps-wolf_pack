module.exports = {
    url: 'https://tools.usps.com/go/TrackConfirmAction_input',
    elements : {
        trackInputField: { 
            selector: '//textarea[@type="text"]',
            locateStrategy: 'xpath'
        },
        trackButton: {
            selector: '//button[@type="submit"]',
            //selector: '//button[text()="Track"]',
            locateStrategy: 'xpath'
        },
        trackAnotherPackage : {
            selector: '//a[@class="track-another-package-open"]',
            locateStrategy: 'xpath'
        },
        trackResults1 : {
            selector: '(//span[@class="tracking-number"])[1]',
            locateStrategy: 'xpath'
        },
        trackResults2 : {
            selector: '(//span[@class="tracking-number"])[2]',
            locateStrategy: 'xpath'
        },
        textResults1 : {
            selector: '//h2/strong',
            locateStrategy: 'xpath'
        },
       

    
    }
}