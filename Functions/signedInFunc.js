module.exports = (pageObject) => {
   
   
    pageObject
    .click('@signInPageButton')
    .waitForElementPresent('@usernameLabel', 5000, "Wating 5 sec for page to load")
    .setValue('@usernameInput' ,'jeffsoftqa')
    .setValue('@passwordInput' , 'Software2')
    .click('@signInButton')
    .waitForElementPresent('@signInName', 5000)
    .verify.elementPresent('@signInName')

}