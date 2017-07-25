const express = require('express');
const app = express()
const mustacheExpress = require('mustache-express');

app.get('/', function(req, res, next){
  res.send('anything');
})

app.listen(3000, function () {
  console.log('App listening on port 3000');
})
