//https://github.com/mikeal/request

var request = require('request');
var fs = require("fs");
var myFileName = 'comments.txt'

//request nytimes comments for story at http://www.nytimes.com/2013/07/05/opinion/krugman-e-pluribus-unum.html, sorted by editor's selection

request('http://api.nytimes.com/svc/community/v2/comments/url/exact-match.xml?url=http%3A%2F%2Fwww.nytimes.com%2F2013%2F07%2F05%2Fopinion%2Fkrugman-e-pluribus-unum.html&sort=editors-selection&api-key=22782cf7bd7c5904640c86397bf65764:19:54772968').pipe(fs.createWriteStream('comments.txt')), function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log('file successfully written') 
  }
};
