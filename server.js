//https://github.com/mikeal/request
//http://nodejs.org/api/fs.html

var request = require('request');
var fs = require('fs');
var url = 'http://api.nytimes.com/svc/community/v2/comments/url/exact-match?url=http%3A%2F%2Fwww.nytimes.com%2F2013%2F07%2F05%2Fopinion%2Fkrugman-e-pluribus-unum.html';
var offset = '&offset=0';
var sorting = '&sort=recommended';
var apiKey = '22782cf7bd7c5904640c86397bf65764:19:54772968';

//request NYTimes comments for story at http://www.nytimes.com/2013/07/05/opinion/krugman-e-pluribus-unum.html, sorted by social ranking mechanism. Each function gets 25 comments; the first gets the first 25, the second gets 26-50, etc., for a total of 246 comments that have at least one "like" vote. Functions execute at ten-second intervals.

function getComments1 () {

request('http://api.nytimes.com/svc/community/v2/comments/url/exact-match?url=http%3A%2F%2Fwww.nytimes.com%2F2013%2F07%2F05%2Fopinion%2Fkrugman-e-pluribus-unum.html&offset=0&sort=recommended&api-key=' + apiKey).pipe(fs.createWriteStream('comments' + '1-25' + '.js')), function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log('file successfully written') 
  }
	else {
		console.error(response.statusCode + ": " + errorBody.message);
	}
}
};

setTimeout(function getComments2 () {

request('http://api.nytimes.com/svc/community/v2/comments/url/exact-match?url=http%3A%2F%2Fwww.nytimes.com%2F2013%2F07%2F05%2Fopinion%2Fkrugman-e-pluribus-unum.html&offset=25&sort=recommended&api-key=' + apiKey).pipe(fs.createWriteStream('comments'+'26-50'+'.js')), function (error, response, body) {
  if (!error && response.statusCode == 200) {
		comments2String = (JSON.stringify(body));
		comments2Obj = JSON.parse(comments2String);
		comments2 = comments2Obj.results.comments;
		comments2Bodies = [];
		for(var i=0; i<comments.length; i++){
			comments2Bodies.push(comments2[i].commentBody);
			}
		console.log(comments2Bodies);
		console.log(comments2); 
  }
	else {
		console.error(response.statusCode + ": " + errorBody.message);
	}
}
},10000);

setTimeout(function getComments3 () {

request('http://api.nytimes.com/svc/community/v2/comments/url/exact-match?url=http%3A%2F%2Fwww.nytimes.com%2F2013%2F07%2F05%2Fopinion%2Fkrugman-e-pluribus-unum.html&offset=50&sort=recommended&api-key=' + apiKey).pipe(fs.createWriteStream('comments'+'51-75'+'.js')), function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log('file successfully written') 
  }
	else {
		console.error(response.statusCode + ": " + errorBody.message);
	}
}
},10000);

setTimeout(function getComments4 () {

request('http://api.nytimes.com/svc/community/v2/comments/url/exact-match?url=http%3A%2F%2Fwww.nytimes.com%2F2013%2F07%2F05%2Fopinion%2Fkrugman-e-pluribus-unum.html&offset=75&sort=recommended&api-key=' + apiKey).pipe(fs.createWriteStream('comments'+'76-100'+'.js')), function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log('file successfully written') 
  }
	else {
		console.error(response.statusCode + ": " + errorBody.message);
	}
}
},10000);

setTimeout(function getComments5 () {

request('http://api.nytimes.com/svc/community/v2/comments/url/exact-match?url=http%3A%2F%2Fwww.nytimes.com%2F2013%2F07%2F05%2Fopinion%2Fkrugman-e-pluribus-unum.html&offset=100&sort=recommended&api-key=' + apiKey).pipe(fs.createWriteStream('comments'+'101-125'+'.js')), function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log('file successfully written') 
  }
	else {
		console.error(response.statusCode + ": " + errorBody.message);
	}
}
},10000);

setTimeout(function getComments6 () {

request('http://api.nytimes.com/svc/community/v2/comments/url/exact-match?url=http%3A%2F%2Fwww.nytimes.com%2F2013%2F07%2F05%2Fopinion%2Fkrugman-e-pluribus-unum.html&offset=125&sort=recommended&api-key=' + apiKey).pipe(fs.createWriteStream('comments'+'126-150'+'.js')), function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log('file successfully written') 
  }
	else {
		console.error(response.statusCode + ": " + errorBody.message);
	}
}
},10000);

setTimeout(function getComments7 () {

request('http://api.nytimes.com/svc/community/v2/comments/url/exact-match?url=http%3A%2F%2Fwww.nytimes.com%2F2013%2F07%2F05%2Fopinion%2Fkrugman-e-pluribus-unum.html&offset=150&sort=recommended&api-key=' + apiKey).pipe(fs.createWriteStream('comments'+'151-175'+'.js')), function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log('file successfully written') 
  }
	else {
		console.error(response.statusCode + ": " + errorBody.message);
	}
}
},10000);

setTimeout(function getComments8 () {

request('http://api.nytimes.com/svc/community/v2/comments/url/exact-match?url=http%3A%2F%2Fwww.nytimes.com%2F2013%2F07%2F05%2Fopinion%2Fkrugman-e-pluribus-unum.html&offset=175&sort=recommended&api-key=' + apiKey).pipe(fs.createWriteStream('comments'+'176-200'+'.js')), function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log('file successfully written') 
  }
	else {
		console.error(response.statusCode + ": " + errorBody.message);
	}
}
},10000);

setTimeout(function getComments9 () {

request('http://api.nytimes.com/svc/community/v2/comments/url/exact-match?url=http%3A%2F%2Fwww.nytimes.com%2F2013%2F07%2F05%2Fopinion%2Fkrugman-e-pluribus-unum.html&offset=200&sort=recommended&api-key=' + apiKey).pipe(fs.createWriteStream('comments'+'201-225'+'.js')), function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log('file successfully written') 
  }
	else {
		console.error(response.statusCode + ": " + errorBody.message);
	}
}
},10000);

setTimeout(function getComments10 () {

request('http://api.nytimes.com/svc/community/v2/comments/url/exact-match?url=http%3A%2F%2Fwww.nytimes.com%2F2013%2F07%2F05%2Fopinion%2Fkrugman-e-pluribus-unum.html&offset=225&sort=recommended&api-key=' + apiKey).pipe(fs.createWriteStream('comments'+'226-246'+'.js')), function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log('file successfully written') 
  }
	else {
		console.error(response.statusCode + ": " + errorBody.message);
	}
}
},10000);

