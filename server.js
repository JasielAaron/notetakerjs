//importing express 
const express = require('express');
const path = require('path'); //routes 
const fs = require('fs'); //read/re-write
const uniqid = require('uniqid'); // creates unique ID 
const routes = require('./routing')

//providing a shortcut for express when using it in a function
const app = express();

const PORT = process.env.PORT || 3001; 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));


app.use(routes);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);