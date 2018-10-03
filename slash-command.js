const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('port', process.env.PORT || 8908);


var WebClient = require('@slack/client').WebClient;
// An access token (from your Slack app or custom integration - xoxa, xoxp, or xoxb)
var token = "xoxp-398387339332-398632380834-448551948931-5cb3ecc528c6dc11e3d1e16122b569ba";

var web = new WebClient(token);

app.post('/', (req, res) => {
    let text = req.body.text;
    console.log(req.body);
    switch (req.body.command) {
        case "/yleta_raodenoba":
            handleYletaRaodenoba(req, res);
            break;
        case "/monitor_keyword":
            handleMonitorKeyword(req, res);
            break;
        default:
            break;
    }
});
scopes = "chat:write:bot incoming-webhook commands"
app.get('/', (req, res) => {
    res.writeHead(302, {
        'Location': 'https://slack.com/oauth/authorize?client_id=398387339332.443669817009&scope=' + scopes
    });
    res.end();
})

app.get('/redirect-uri', (req, res) => {

    data = {
        "client_id": '398387339332.443669817009',
        "client_secret": '2350da2d7abea5cd441bb6333d5e2e3c',
        "code": req.query.code,
        "redirect_uri": "https://69871841.ngrok.io/redirect-uri"
    };
    console.log(data)
    request.post(
        'https://slack.com/api/oauth.access', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            form: {
                client_id: "398387339332.443669817009",
                client_secret: "2350da2d7abea5cd441bb6333d5e2e3c",
                code: req.query.code,
                redirect_uri: "https://69871841.ngrok.io/redirect-uri"
            }
        },
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body)
            }
        }
    );
})

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

    web.chat.postMessage({
            channel: req.body.channel_id,
            text: 'Hello there'
        })
        .then(function (res) {
            console.log('Message sent: ', res.ts);
        })["catch"](console.error);
}