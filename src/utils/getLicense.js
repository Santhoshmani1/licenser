const { mitLicense, apacheLicense } = require("../licenses.js");


/**
 * 
 * @param {String} licenseID represents the license ID - "MIT" or "Apache 2.0"
 * @returns String representing the license text or null if the license ID is invalid
 */
function getLicense(licenseID) {
    
    if(licenseID === "MIT") {
        return mitLicense;
    }
    else if(licenseID === "Apache 2.0") {
        return apacheLicense;
    }
    else {
        return null;
    }
}

module.exports = { getLicense };
