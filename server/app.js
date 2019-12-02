const path = require('path');
const express = require('express');
const app = express();
const { Model } = require('./db/index.js');
app.use(express.static(path.join(__dirname, '..', 'public'))); 
app.use(express.static(path.join(__dirname, '..', 'dist'))); //looks for the react folder

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

//will start creating the routes to add why does export route not work, need to ask TA 

app.get('/api/calendar', (req, res, next) => {
  Model.findAndCountAll().then(results => {
    res.send(results);
  }).catch(error => console.log(error));
});

// app.update('./api/calendar', (req,res,next) => {
//   let {date, to_do} = req.body; 
//   Model.create({

//   })
// })
module.exports = { app };
