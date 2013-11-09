var request = require('request');
var fs = require('fs');
var myFileName = 'comments.txt';
var url = 'http://api.nytimes.com/svc/community/v2/comments/url/exact-match?url=http%3A%2F%2Fwww.nytimes.com%2F2013%2F07%2F05%2Fopinion%2Fkrugman-e-pluribus-unum.html';
var offset = '&offset=0';
var sorting = '&sort=recommended';
var apiKey = '22782cf7bd7c5904640c86397bf65764:19:54772968';

function getComments3 () {

request('http://api.nytimes.com/svc/community/v2/comments/url/exact-match?url=http%3A%2F%2Fwww.nytimes.com%2F2013%2F07%2F05%2Fopinion%2Fkrugman-e-pluribus-unum.html&offset=50&sort=recommended&api-key=' + apiKey).pipe(fs.createWriteStream('comments'+'51-75'+'.js')), function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log('file successfully written') 
  }
	else {
		console.error(response.statusCode + ": " + errorBody.message);
	}
}
};
