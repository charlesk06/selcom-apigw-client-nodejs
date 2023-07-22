const express = require('express')
const apigwCLient = require('./authentication.js')

const app = express()




//Controllers
apigwCLient(app);

app.listen(4000,()=>{
    console.log('To do App server is running on Port 4000')
})