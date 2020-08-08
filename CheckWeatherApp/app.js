const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config()
const Datastore = require('nedb');

const app = express();
const PORT_NUMBER = 3000;

const db = new Datastore('database.db');
db.loadDatabase();

app.use(express.static('public'));
app.use(express.json());

// console.log(process.env);

app.get('/api', async (req, res) => {
    await db.find({}, async (error, foundData) => {
        try {
            res.json(foundData);
        } catch(error) {
            console.log(error);
        }
    });
    
}); 

app.post('/api', (req, res) => {
    const data = req.body;
    const timestamp = Date.now();
    data.timestamp = timestamp;
    db.insert(data);
    const RESPONSE_OBJ = {
        status: "success"
    ,   lat: req.body.lat
    ,   long: req.body.long
    ,   timestamp: timestamp
    };
    res.json(RESPONSE_OBJ);
});


// weather
app.get('/weather/:lat/:long', async (req, res)=> {
    const latitude = req.params.lat;
    const longitude = req.params.long;
    console.log(latitude);
    console.log(longitude);
    const WEATHER_API_KEY =  process.env.WEATHER_API_KEY;
    const WEAHTER_API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`;
    const responses = await fetch(WEAHTER_API_URL);
    const Weater_Data = await responses.json();
    console.log(Weater_Data);
    // air quality api
    const AIR_QUAL_URL = `https://api.openaq.org/v1/latest?coordinates=${latitude},${longitude}`;
    const AIR_QUAL_RESPONSE = await fetch(AIR_QUAL_URL);
    const AIR_DATA = await AIR_QUAL_RESPONSE.json();

    const data = {
        weather: Weater_Data
    ,   air: AIR_DATA
    };
    
    res.json(data);
});

app.listen(PORT_NUMBER, () => {
    console.log(`LISTENING TO PORT ${PORT_NUMBER}`);
});