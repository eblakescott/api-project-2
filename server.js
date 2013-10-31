//https://github.com/mikeal/request

var request = require('request');
var fs = require("fs");
var myFileName = 'comments.txt';
var apiKey = '22782cf7bd7c5904640c86397bf65764:19:54772968';

//request nytimes comments for story at http://www.nytimes.com/2013/07/05/opinion/krugman-e-pluribus-unum.html, sorted by social ranking mechanism


request('http://api.nytimes.com/svc/community/v2/comments/url/exact-match?url=http%3A%2F%2Fwww.nytimes.com%2F2013%2F07%2F05%2Fopinion%2Fkrugman-e-pluribus-unum.html&sort=recommended&api-key=' + apiKey).pipe(fs.createWriteStream('comments.txt')), function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log('file successfully written') 
  }
}

request('http://api.nytimes.com/svc/community/v2/comments/url/exact-match?url=http%3A%2F%2Fwww.nytimes.com%2F2013%2F07%2F05%2Fopinion%2Fkrugman-e-pluribus-unum.html&offset=25&sort=recommended&api-key=' + apiKey).pipe(fs.createWriteStream('comments'+'26'+'.txt')), function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log('file successfully written') 
  }
}

request('http://api.nytimes.com/svc/community/v2/comments/url/exact-match?url=http%3A%2F%2Fwww.nytimes.com%2F2013%2F07%2F05%2Fopinion%2Fkrugman-e-pluribus-unum.html&offset=50&sort=recommended&api-key=' + apiKey).pipe(fs.createWriteStream('comments'+'51'+'.txt')), function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log('file successfully written') 
  }
}

;
