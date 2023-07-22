//import package
const {apigwClient } = require("./node_modules/selcom-apigw-client");
// initalize a new apiAccess instace with values of the base url, api key and api secret

const apiKey = '202cb962ac59075b964b07152d234b70';
const apiSecret = '81dc9bdb52d04dc20036dbd8313ed055';
const baseUrl = "http://example.com"

// initalize a new apiAccess instace with values of the base url, api key and api secret
const client = new apiAccess(baseUrl, apiKey, apiSecret);

//order data
var orderJson = {
"vendor":"VENDORTILL",
"order_id":"1218d5Qb",
"buyer_email": "john@example.com",
"buyer_name": "John Joh",
"buyer_phone": "255682555555",
"amount":  8000,
"currency":"TZS",
"buyer_remarks":"None",
"merchant_remarks":"None",
"no_of_items":  1

}
// path relatiive to base url
var orderPath = "/v1/checkout/create-order-minimal"
//crate new order

var  orderRespose = client.postFunc(orderPath, orderJson)

//get response data from promise
orderResponse.then((response)=> {console.log(response)}).catch((response)=> {console.log(response)})

console.log(orderRespose)