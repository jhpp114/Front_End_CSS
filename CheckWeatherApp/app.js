const express = require('express');
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

app.listen(PORT_NUMBER, () => {
    console.log(`LISTENING TO PORT ${PORT_NUMBER}`);
});