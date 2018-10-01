var WebClient = require('@slack/client').WebClient;
// An access token (from your Slack app or custom integration - xoxa, xoxp, or xoxb)
var token = "xoxp-398387339332-398632380834-445622521670-0b59d63f04d90bbb7986b1ecd3626800";
var web = new WebClient(token);
// This argument can be a channel ID, a DM ID, a MPDM ID, or a group ID
var conversationId = 'DBRKMJJSK';
// See: https://api.slack.com/methods/chat.postMessage
web.chat.postMessage({ channel: conversationId, text: 'Hello there' })
    .then(function (res) {
    // `res` contains information about the posted message
    console.log('Message sent: ', res.ts);
})["catch"](console.error);


web.channels.list()
  .then((res) => {
    // `res` contains information about the channels
    res.channels.forEach(c => console.log(c.name));
  })
  .catch(console.error);