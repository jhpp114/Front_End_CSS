const express = require('express');
const { static } = require('express');
const app = express();
const PORT_NUMBER = 3000;

app.use(express.static('public'));

app.listen(PORT_NUMBER, function() {
    console.log(`PORT_NUMBER: ${PORT_NUMBER}`);
});