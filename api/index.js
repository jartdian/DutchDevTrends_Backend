const express = require('express');
const app = express()
const port = process.env.PORT || 3000;

const citiesLangData = require('../data/citiesLangData.js');

app.use(express.static('public'));

app.use((req, res, next) => {
    // res.header('Access-Control-Allow-Origin', 'https://jartdian.github.io/DutchDevTrends');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Credentials', true); // If your requests include credentials
    next();
  });

app.get('/languages/',(req,res) => {
    res.json(citiesLangData)
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})

module.exports = app;