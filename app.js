const http = require('http')
const express = require('express')
//import package
const apigwClient = require('selcom-apigw-client');

const app = express()

// initalize a new apiAccess instace with values of the base url, api key and api secret

//TEST
/*const apiKey = 'Y9BANKTZ-Hnu5P5oaS4TMe7FL';
const apiSecret = '166bd893-c894-4ddd-943d-1e5036817325';
const baseUrl = "https://apigwtest.selcommobile.com";*/


//Production
const apiKey = 'Y9BANKTZ-CPdY0XMjgwzOSnzB';
const apiSecret = 'c3421a7a-a616-4e12-b367-4e54e9d35380';
const baseUrl = "http://155.12.30.63:8007";

//initalize a new apiAccess instace with values of the base url, api key and api secret
/*app.get('/',(req, res)=>{
    

   //console.log(auth.computeHeader("https://apigwtest.selcommobile.com",'Y9BANKTZ-Hnu5P5oaS4TMe7FL','166bd893-c894-4ddd-943d-1e5036817325'));
res.send(auth.computeHeader("https://apigwtest.selcommobile.com",'Y9BANKTZ-Hnu5P5oaS4TMe7FL','166bd893-c894-4ddd-943d-1e5036817325'))
})*/

//Controllers

const client = new apigwClient.apigwCLient(baseUrl, apiKey, apiSecret);

//data
var utilityPaymentJson = {
    "transid": "1218d5Qb5667799",
    "utilitycode": "LUKU",
    "utilityref": "54205401976",
    "amount": 1000,
    "vendor": "Y9BANKTZ",
    "pin": "0069",
    "msisdn": "255752402589",
};
// path relatiive to base url
var utilityPaymentPath = "/v1/utilitypayment/process"

//crate new utilityPayment
var utilityPaymentRespose = client.postFunc(utilityPaymentPath, utilityPaymentJson);

console.log(client.computeHeader(baseUrl, apiKey, apiSecret));

/*Credential Parameters
console.log(`Base Url: ${baseUrl}`);
console.log(`apiKey : ${apiKey}`);
console.log(`apiSecret : ${apiSecret}`);*/

//Aync Response Log
utilityPaymentRespose.then(a => console.log(a));

app.listen(4000, () => {
    console.log('Node APP is running on Port 4000');

})
