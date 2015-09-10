// Use the code in `archive-helpers.js` to actually download the urls
// that are waiting.
var path = require('path');
var urlModule = require('url');
var request = require("request");
var LocalStorage = require('./LocalStorage.js').LocalStorage; //load local storage library
var http = require("http");
// var handler = require("./request-handler");
var initPath = path.join(__dirname, '../archives/');
// var initialize = require(initPath);
var archive = require('../helpers/archive-helpers');

var localStorage = new LocalStorage(initPath + "sites");

var headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "text/html"
};
// Why do you think we have this here?
// HINT: It has to do with what's in .gitignore
// initialize("../archives");
var theURI = "http://stackoverflow.com/questions/15838623/node-js-request-web-page";
var potentialSite = urlModule.parse(theURI).host+urlModule.parse(theURI).pathname;

var port = 8000;
var ip = "127.0.0.1";
var workerRequest = function(){

};
var server = http.createServer(workerRequest);

if (module.parent) {
  module.exports = server;
} else {
  server.listen(port, ip);
  console.log("Listening on http://" + ip + ":" + port);
}
localStorage.setItem('bogusNAme','asdklfjsdlk');
console.log('something');
request({
  uri: theURI,
}, function(error, response, body) {
  // console.log(body);

  localStorage.setItem(potentialSite,body);
});


