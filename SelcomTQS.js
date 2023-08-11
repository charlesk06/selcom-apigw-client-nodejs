const http = require('http')
const express = require('express')
//import package
const apigwClient = require('selcom-apigw-client');

const app = express()

// initalize a new apiAccess instace with values of the base url, api key and api secret

const apiKey = 'Y9BANKTZ-Hnu5P5oaS4TMe7FL';
const apiSecret = '166bd893-c894-4ddd-943d-1e5036817325';
const baseUrl = "https://apigwtest.selcommobile.com";

//initalize a new apiAccess instace with values of the base url, api key and api secret

//Controllers

const client = new apigwClient.apigwCLient(baseUrl, apiKey, apiSecret);

//data
var utilityPaymentStatusJson = {
  "transid":"1218d5Q876669"
};
// path relatiive to base url
var utilityPaymentStatusPath = "/v1/utilitypayment/query"

//crate new utilityPaymentStatus
var  utilityPaymentStatusRespose = client.getFunc(utilityPaymentStatusPath, utilityPaymentStatusJson);

//Aync Response Log
utilityPaymentStatusRespose.then(a => console.log(a));

app.listen(4000, () => {
    console.log('Node APP is running on Port 4000');

})
