(function(){
let unit = document.querySelector("body > emr-app > div > emr-app-body > main > incident-tab > emr-main-view > main-viewport > field-set:nth-child(1) > eso-field:nth-child(18) > eso-control > eso-single-select > div > div:nth-child(1) > div > div.display-value").textContent
let urgency = document.querySelector("body > emr-app > div > emr-app-body > main > incident-tab > emr-main-view > main-viewport > field-set:nth-child(1) > eso-field:nth-child(7) > eso-control > eso-single-select > div > div:nth-child(1) > div > div.display-value").textContent
let address = document.querySelector("body > emr-app > div > emr-app-body > main > incident-tab > emr-main-view > main-viewport > field-set:nth-child(2) > eso-location > div:nth-child(2) > eso-address > eso-field:nth-child(2) > eso-control > eso-text > input").value
return{unit,urgency, address}
})();






//! needed func
// 'document.querySelector("").textContent'
//! Unit
// body > emr-app > div > emr-app-body > main > incident-tab > emr-main-view > main-viewport > field-set:nth-child(1) > eso-field:nth-child(18) > eso-control > eso-single-select > div > div:nth-child(1) > div > div.display-value

//! Urgency
//body > emr-app > div > emr-app-body > main > incident-tab > emr-main-view > main-viewport > field-set:nth-child(1) > eso-field:nth-child(7) > eso-control > eso-single-select > div > div:nth-child(1) > div > div.display-value
//! Address (must use .value to get textarea info)
// body > emr-app > div > emr-app-body > main > incident-tab > emr-main-view > main-viewport > field-set:nth-child(2) > eso-location > div:nth-child(2) > eso-address > eso-field:nth-child(2) > eso-control > eso-text > input