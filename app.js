var express = require('express')
var app = express()

// serve static files
app.use(express.static('public'))

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index');
})
app.get('/sridevi', function(req, res) {
    res.render('sridevi')
})
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})