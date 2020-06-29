const express = require('express');
const app = express();

app.get('', (req, res) => {
    res.status(200).send('You are at home!');
});

app.listen(8800, () => {
    console.log("Start listening at 8800");
});