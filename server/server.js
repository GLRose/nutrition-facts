const cors = require('cors')
const express = require("express");
const app = express();
const axios = require('axios');


require('dotenv').config()

let PORT = process.env.PORT;
app.use(cors())
app.get("/", (req, res) => {
    res.json({
        name: "Garrett Rose",
        age: 29
    })
    console.log("connected")
});


app.get('/foods', (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://api.edamam.com/api/food-database/v2/parser?',

        params: {
            app_id: process.env.API_ID,
            app_key: process.env.API_KEY,
            ingr: 'apple',
        }
    }
    axios.request(options).then((response) => {
        res.json(response.data)
    }).catch((error) => {
        console.error(error)
    })
})

// app.post("/post", (req, res) => {
//     console.log("Connected to Frontend");
// })

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


