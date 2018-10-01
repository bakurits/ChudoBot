const { WebClient } = require('@slack/client');

// An access token (from your Slack app or custom integration - xoxa, xoxp, or xoxb)
const token = "xoxp-398387339332-398632380834-445622521670-0b59d63f04d90bbb7986b1ecd3626800";

const web = new WebClient(token);

// This argument can be a channel ID, a DM ID, a MPDM ID, or a group ID
const conversationId = 'DBRKMJJSK';

// See: https://api.slack.com/methods/chat.postMessage
web.chat.postMessage({ channel: conversationId, text: 'Hello there' })
    .then((res) => {
        // `res` contains information about the posted message
        console.log('Message sent: ', res.ts);
    })
    .catch(console.error);

