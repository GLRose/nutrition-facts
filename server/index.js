const cors = require("cors");
const express = require("express");
const app = express();
const axios = require("axios");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
require("dotenv").config();

let PORT = process.env.PORT;
app.use(cors());
//This is a test route
app.get("/", (req, res) => {
    res.json({
        name: "Garrett Rose",
        age: 29,
    });
    console.log("connected");
});

//Universal json list call for foods
app.get("/food", (req, res) => {
    const options = {
        method: "GET",
        url: "https://api.edamam.com/api/food-database/v2/parser?",

        params: {
            app_id: process.env.API_ID,
            app_key: process.env.API_KEY,
            ingr: " ",
        },
    };
    axios
        .request(options)
        .then((response) => {
            res.json(response.data);
        })
        .catch((error) => {
            console.error(error);
        });
});

//params passed from front end ingr
app.get("/foods", (req, res) => {
    const passedFood = req.query.ingr;
    // console.log(passedFood);
    const options = {
        method: "GET",
        url: "https://api.edamam.com/api/food-database/v2/parser?",

        params: {
            app_id: process.env.API_ID,
            app_key: process.env.API_KEY,
            ingr: passedFood,
        },
    };
    axios
        .request(options)
        .then((response) => {
            res.json(response.data);
        })
        .catch((error) => {
            console.error(error);
        });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
