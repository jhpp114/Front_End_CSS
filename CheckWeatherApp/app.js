const express = require('express');
const fetch = require('node-fetch');
const Datastore = require('nedb');

const app = express();
const PORT_NUMBER = 3000;

const db = new Datastore('database.db');
db.loadDatabase();

app.use(express.static('public'));
app.use(express.json());

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
    const WEATHER_API_KEY =  `f1531bea64c81285bbf775f7d0ad13bd`;
    const WEAHTER_API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`;
    const responses = await fetch(WEAHTER_API_URL);
    const data = await responses.json();
    res.json(data);
});

app.listen(PORT_NUMBER, () => {
    console.log(`LISTENING TO PORT ${PORT_NUMBER}`);
});