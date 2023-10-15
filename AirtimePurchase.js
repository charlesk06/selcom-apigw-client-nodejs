const http = require('http')
const express = require('express')
//import package
const apigwClient = require('./node_modules/');

const app = express()

// initalize a new apiAccess instace with values of the base url, api key and api secret

/*UAT
const apiKey = 'Y9BANKTZ-Hnu5P5oaS4TMe7FL';
const apiSecret = '166bd893-c894-4ddd-943d-1e5036817325';
const baseUrl = "https://apigwtest.selcommobile.com";*/


//Production
const apiKey = 'Y9BANKTZ-CPdY0XMjgwzOSnzB';
const apiSecret = 'c3421a7a-a616-4e12-b367-4e54e9d35380';
const baseUrl = "http://192.168.150.17:8007";

//initalize a new apiAccess instace with values of the base url, api key and api secret

//Controllers

const client = new apigwClient.apigwCLient(baseUrl, apiKey, apiSecret);

//data
var utilityPaymentJson = {
    "transid": "1218d5Q87666967667",
    "utilitycode": "TOP",
    "utilityref": "255752402589",
    "amount": 1000,
    "vendor": "Y9BANKTZ",
    "pin": "0069",
    "msisdn": "255752402589"
};
// path relatiive to base url

var utilityPaymentPath = "/v1/utilitypayment/process";

//crate new utilityPayment
var utilityPaymentRespose = client.postFunc(utilityPaymentPath,utilityPaymentJson);

console.log(client.computeHeader(baseUrl, apiKey, apiSecret));

//Aync Response Log
utilityPaymentRespose.then(a => console.log(a));

app.listen(4000, () => {
    console.log('Node APP is running on Port 4000');

})
