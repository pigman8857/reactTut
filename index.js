const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'))

app.get('', (req, res) => {
    let page = path.join(__dirname, '/public/pages', "index.html");
    console.log(page);
    res.status(200).sendFile(page);
});

app.listen(8800, () => {
    console.log("Start listening at 8800");
});