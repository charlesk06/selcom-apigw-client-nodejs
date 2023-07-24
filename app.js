const http = require('http')
const express = require('express')
//import package
const apigwClient = require('../selcom-apigw-client-nodejs/node_modules/selcom-apigw-client/');

const app = express()

// initalize a new apiAccess instace with values of the base url, api key and api secret

const apiKey = 'Y9BANKTZ-Hnu5P5oaS4TMe7FL';
const apiSecret = '166bd893-c894-4ddd-943d-1e5036817325';
const baseUrl = "https://apigwtest.selcommobile.com"

//initalize a new apiAccess instace with values of the base url, api key and api secret

app.get('/',(req, res)=>{
    const auth = new apigwClient.apigwCLient(baseUrl,apiKey,apiSecret);

   // console.log(auth.computeHeader("https://apigwtest.selcommobile.com",'Y9BANKTZ-Hnu5P5oaS4TMe7FL','166bd893-c894-4ddd-943d-1e5036817325'));
res.send(auth.computeHeader("https://apigwtest.selcommobile.com",'Y9BANKTZ-Hnu5P5oaS4TMe7FL','166bd893-c894-4ddd-943d-1e5036817325'))
})

//Controllers

app.listen(4000,()=>{
    console.log('To do App server is running on Port 4000');
    
})
