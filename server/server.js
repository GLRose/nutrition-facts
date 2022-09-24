const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const axios = require('axios');
require('dotenv').config()

axios.get(`${process.env.BASE_URL}${process.env.API_KEY}`)
    .then(response => {
        console.log(response.data.foods[0].description)
    })
    .catch(error => {
        console.log(error);
    });
app.listen(8080, () => {
    console.log(`Server is running on port 8080.`);
});





