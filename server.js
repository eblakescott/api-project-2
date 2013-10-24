//https://github.com/mikeal/request

var request = require('request');

request('http://www.ed-scott.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Print the web page.
  }
})

