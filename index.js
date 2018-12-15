const express = require('express');
const request = require('request');

const app = express();
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', (req, res) => {
  res.send('Try /deck/new/shuffle, or /deck/:deck_id/draw');
});

// make a request to the deck of cards api that the student can use to get around cors
app.get('/deck/new/shuffle', (req, res) => {
  request({
    url: 'https://deckofcardsapi.com/api/deck/new/shuffle'
  }, (error, response, body) => {
    res.json(JSON.parse(body));
  });
});

app.get('/deck/:deck_id/draw', (req, res) => {
  const { deck_id } = req.params;

  request({
    url: `https://deckofcardsapi.com/api/deck/${deck_id}/draw`
  }, (error, response, body) => {
    res.json(JSON.parse(body));
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening for requests on ${PORT}`));