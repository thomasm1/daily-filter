var express = require('express');
var app = express();

app.use(express.static('client'));

var server = app.listen((process.env.PORT || 3010), function () {
  var port = server.address().port;

  console.log('DailyFilter listening at http://localhost:%s', port);
});