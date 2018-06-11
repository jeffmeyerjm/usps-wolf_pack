module.exports = (pageObjects,testData) => {
    pageObjects
        .setValue('@companyInputba', testData.company)
        .setValue('@streetInputba', testData.street)
        .setValue('@cityInputba', testData.city)
        .setValue('@stateInputba', testData.state)
}