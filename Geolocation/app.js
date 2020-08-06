const express = require('express');
const { static } = require('express');
const app = express();
const PORT_NUMBER = 3000;

app.use(express.static('public'));
app.use(express.json());

app.post('/api', (req, res) => {
    console.log(req.body);
    res.json({
        status: 'success'
    ,   latitude: req.body.User_Latitude
    ,   longitude: req.body.User_Longitude
    ,   mood: req.body.mood_data
    });
});

app.listen(PORT_NUMBER, function() {
    console.log(`PORT_NUMBER: ${PORT_NUMBER}`);
});