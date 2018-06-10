module.exports = {
    url: 'https://www.usps.com/',
    elements: {

        signInPageButton: '#login-register-header',
        usernameLabel: 'label[id="for-username"]',
        usernameInput: '#username',
        passwordLabel: 'label[id="for-password"]',
        passwordInput: 'input[name="password"]',
        signInButton: 'button[id="btn-submit"]',
        signInName: 'a[id="anchor-login"]',
        signOutButton:
            {
                selector: '//a[text()="Sign Out"]',
                locateStrategy: 'xpath'
            },

        signOutHeadline: 'h1[class="headline"]'
    }
}