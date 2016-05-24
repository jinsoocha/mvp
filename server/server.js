var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('port', 3000);

app.listen(app.get('port'));
console.log('Listening on', app.get('port'));

app.use(express.static(__dirname + '/../compiled'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var data = [];

app.post('/server', function (req, res) {
  var Email = require('emailjs/email');
  var server = Email.server.connect({
    host: 'smtp.gmail.com',
    user: 'chatownlife@gmail.com',
    password: 'ckxkdns900',
    ssl: true
  });
  server.send({
    'text': req.body.question,
    'from': req.body.email,
    'to': "chatownlife@gmail.com",
    'reply-to': req.body.email,
    'subject': 'Answer FTW: ' + req.body.emailRequested + ', Q: ' + req.body.question 
  }, function(error) {
    if (error) {
    	console.log(req.body, error)
      return res.send({statusCode: 500, status: 'KO'});
    } else {
    	data.push(req.body);
      return res.send({statusCode: 200, status: 'OK', data: data});
    }
  });
});  

var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10 // Seconds.
};

app.get('/server', function(req, res) {
	console.log("getting the server")
	res.writeHead(200, headers);
  res.end(JSON.stringify(data));
})
