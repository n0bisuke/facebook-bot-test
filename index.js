// var express = require('express');
// var app = express();
//
// app.set('port', (process.env.PORT || 5000));
//
// app.use(express.static(__dirname + '/public'));
//
// // views is directory for all template files
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');
//
// app.get('/', function(request, response) {
//   response.render('pages/index');
// });
//
// app.listen(app.get('port'), function() {
//   console.log('Node app is running on port', app.get('port'));
// });
//


const LineBot = require('@3846masa/linebot');
const bot = new LineBot({
  channelID: '1462882381',
  channelSecret: 'f8529202cefd073d173d51dbd445b73c',
  MID: 'u356bf0e1d9c5143a4de80e036cc9e222'
});

bot.on('message', (res) => {
  const content = res.content;
  if ( content.contentType === LineBot.CONST.CONTENT_TYPE.TEXT ) {
    bot.postText({
      user: content.from,
      message: content.text
    });
  } else {
    bot.postText({
      user: content.from,
      message: 'Not text.'
    });
  }
});

bot.listen(5000);
