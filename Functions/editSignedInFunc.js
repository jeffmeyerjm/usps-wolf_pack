module.exports = (pageObject, username, password) => {
    
    /*
    
    changes is an array of fields to change and the value to change it
    
        {field: '', value : ''}
    
        */
   

                pageObject
                .click('@signInPageButton')
                .waitForElementPresent('@usernameLabel', 5000, "Wating 5 sec for page to load")
                .setValue('@usernameInput' ,username)
                .setValue('@passwordInput' , password)
}
            