const express = require('express'); 
const bodyParser = require('body-parser'); 
const app = express(); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.set('port', process.env.PORT || 8086);


var WebClient = require('@slack/client').WebClient;
// An access token (from your Slack app or custom integration - xoxa, xoxp, or xoxb)
var token = "xoxp-398387339332-398632380834-448965657030-8b081295e01a6db10be49b6f1e9f555c";

var web = new WebClient(token);

app.post('/', (req, res) => { 
    let text = req.body.text; 
    console.log(req.body);
    switch (req.body.command) {
        case "/yleta_raodenoba": 
            handleYletaRaodenoba(req, res);
            break;
        case "/monitor_keyword" :
            handleMonitorKeyword(req, res);
            break;
        default:
            break;
    }
  });

app.listen(app.get('port'));

function handleYletaRaodenoba(req, res) {
    let data = {
        response_type: 'ephemeral',
        text: "3 ცალი : გიორგი, ბეჟანა და ლუკა",
    }; 
    res.json(data);
}


function handleMonitorKeyword(req, res) {
    let data = {
        response_type: 'ephemeral',
        text: "you added keyword monitoring",
    };
    res.json(data);

    web.chat.postMessage({ channel: req.body.channel_id, text: 'Hello there' })
    .then(function (res) {
    console.log('Message sent: ', res.ts);
    })["catch"](console.error);
}