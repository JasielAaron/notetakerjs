//importing express 
const express = require('express');
const path = require('path'); //routes 
const fs = require('fs'); //read/re-write
const uniqid = require('uniqid'); // creates unique ID 

//providing a shortcut for express when using it in a function
const app = express();

const PORT = process.env.PORT || 3001; 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req,res) => 
res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/api/notes', (req, res) => {
  res.json(`${req.method}`)
})

//view route delivers a change res.sendfile 
//api route res.json 

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);