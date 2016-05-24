var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('port', 3000);

app.listen(app.get('port'));
console.log('Listening on', app.get('port'));

app.use(express.static(__dirname + '/../compiled'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var results = {};
results.data = 
[{id: 1, question: 'How is the work environment in SF as an engineer?', 
answer: 'As one of the most innovative business hubs in the U.S., the Bay Area provides an oasis to startups as well as Fortune 500 companies. Encompassed by San Francisco, Oakland, and San Jose, the Bay Area is home to a diverse workforce with dedicated, engaged employees. From unique employee appreciation to giving back to communities, businesses in the Bay Area know that happy employees create cultures where great work thrives.'},
{id: 2, question: 'Do you like living in Korea or America better?', answer:'I’ve been mulling over how to write this post for some time now. As many of you will know, Matt and I lived in Korea for a year, and blogged about it pretty extensively. At the risk of offending someone, I usually shied away from being too negative about any of our experiences. We enjoyed our time in Korea, truly, and we have a ton of blog posts to prove it. But now that there’s some space between us and Korea, both physically and emotionally, I feel like there are some negative aspects about life in Korea that I want to be blunt about. Because the truth is, some parts about living in Korea were really hard for us, and heavily contributed in our decision to only stay one year. I’m a really positive person by nature and I’m a people-pleaser, so I was afraid to tell some things exactly how they were for fear of a backlash of negative comments from people who disagreed with me or were offended by my opinions. But I’ve decided to share them anyway, because after all, they are in fact my opinions, and this is my little soapbox.'},
{id: 3, question: 'How was your Hack Reactor expriences?', answer: 'Several months ago, I posted on Reddit asking for peoples’ experiences and thoughts on programming bootcamps, and in particular on Hack Reactor, which I was on the verge of choosing to attend. Response was tepid; these academies are relatively new and while a few people shared their opinions of the concept, no one responded with any real data, good or bad. Now that I’m two months into Hack Reactor, I’d like to offer a description of my experiences there and, in particular, why I think the school has done a fantastic job.'}];
id = 3;

app.post('/server', function (req, res) {
  if(req.body.question && !req.body.delete && !req.body.answer) {
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
        id++;
        req.body.id = id;
      	results.data.push(req.body);
        return res.send({statusCode: 200, status: 'OK', data: results});
      }
    });
  } else if (req.body.answer) {
    results.data.forEach(function(post) {
      if(post.id === Number(req.body.id)) {
        post.answer = req.body.answer;
      }
    });
    return res.send({statusCode: 200, status: 'OK', data: results})
  } else if (req.body.delete) {
    results.data.forEach(function(post) {
      if(post.id === Number(req.body.id)) {
        results.data.splice(results.data.indexOf(post),1);
      }
    });
    return res.send({statusCode: 200, status: 'OK', data: results})
  } 
});  

var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10 // Seconds.
};

app.get('/server', function(req, res) {
	res.writeHead(200, headers);
  res.end(JSON.stringify(results));
});

