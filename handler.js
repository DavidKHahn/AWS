'use strict';

const emojis = [
  '😀', '😃', '😅', '😛', '🤑','😪','🤠','👿', '🚀'
];
module.exports.rank = (event, context, callback) => {
  const rank = event.queryStringParameters.rank;
// return a rankEmoji based on order of emojis arr ('=' is needed otherwise will return undefined after '🚀')
  const rankEmoji = emojis[rank >= emojis.length ? emojis.length - 1 : rank];
  const response = {
    statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*" // Required for CORS support to work
      },
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
    // receive input with rankEmoji
      input: rankEmoji,
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
