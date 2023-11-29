const express = require('express');
const app = express()
const port = 3000;

const citiesLangData = require('./data/citiesLangData.js');

app.use(express.static('public'));

app.get('/languages/',(req,res) => {
    res.json(citiesLangData)
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})