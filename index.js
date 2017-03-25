var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use('/assets', express.static(__dirname + '/static/home/assets'));
app.use('/test-assets', express.static(__dirname + '/static/team/test-assets'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.sendFile('static/home/index.html', { root: __dirname });
});

app.get('/apply', function(request, response) {
  response.render('pages/application');
});

app.get('/about', function(request, response) {
  response.sendFile('static/team/index.html', { root: __dirname });
});

app.get('/program', function(request, response) {
  response.render('pages/leadpages_program_detail');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});