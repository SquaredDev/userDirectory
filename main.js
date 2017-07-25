const express = require('express');
const app = express()
const mustacheExpress = require('mustache-express');
const data = require('./data.js')
const path = require('path')

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use(express.static(path.join(__dirname, 'static')));

app.get('/', function (req, res) {
  res.render('index', data)
});

app.get("/user/:username", function(req, res, next){
  const user = data.users.filter(function(person){
    return person.username === req.params.username
  })[0]

  res.render("user", user)
})

app.listen(3000, function () {
  console.log('App listening on port 3000');
});
