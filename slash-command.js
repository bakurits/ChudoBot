'use strict'; 
const express = require('express'); 
const bodyParser = require('body-parser'); 
const app = express(); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
const server = app.listen(3000, () => { console.log('Express server   listening on port %d in %s mode', server.address().port,   app.settings.env);});
console.log(app.settings.env);

app.post('/', (req, res) => { 
    let text = req.body.text; 
    console.log(text);
    let data = { 
        response_type: 'ephemeral', // public to the channel 
        text: "3 ცალი : გიორგი, ბეჟანა და ლუკა",
    }; 
    res.json(data);
  });