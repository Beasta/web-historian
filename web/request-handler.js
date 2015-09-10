var path = require('path');
var archive = require('../helpers/archive-helpers');
var urlModule = require('url');
var LocalStorage = require('./LocalStorage.js').LocalStorage; //load local storage library

var localStorage = new LocalStorage('./archives');

// require more modules/folders here!
//require(stubs)
//require localstorage
var headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "text/html"
};


// var fileGetter = function(retrieve){
//   if (typeof localStorage === "undefined" || localStorage === null) {
//     var LocalStorage = require('./LocalStorage.js').LocalStorage;
//     localStorage = new LocalStorage('./archives');
//   };
//     //localStorage.setItem('myFirstKey', 'myFirstValue');
//     return localStorage.getItem(retrieve);
// }

// var fileSetter = function(fileName,value){
//   if (typeof localStorage === "undefined" || localStorage === null) {
//     var LocalStorage = require('./LocalStorage.js').LocalStorage;
//     localStorage = new LocalStorage('./archives');
//   };
//     localStorage.setItem(fileName, JSON.stringify(value));
//     localStorage.setItem('somethingElse', 'myFirstValue');
//     //return localStorage.getItem(retrieve);
// }

// fileSetter('awesome','ok')

// console.log('testing');
// console.log(JSON.stringify(__dirname));

exports.handleRequest = function (req, res) {
  console.log('exports.handleRequest has been called');
  // console.log(req.url);
  // console.log(req);
  // console.log(res);
  var method = req.method;
  var url = req.url;
  // var action = function(method){
  var statusCode;
  if (method === "GET"){ //asking for cached websites
    var data ;
    statusCode = 200;      

    if(url === '/'){
      data = localStorage.getItem('index.html');
    }else{
      console.log('GET request with an empty URL');
     // data = ;
    }

    // console.log(urlModule.parse(url))

    res.writeHead(statusCode, headers);
    res.end(data);

  }else if(method === "POST"){ 
    statusCode = 201;
  }else if(method === "DELETE"){
    statusCode = 202;
  }else{
    statusCode = 404;
  }
  // }
  //on get

    //localstorage write-->sites.txt

  //stubs.writeHead(req, )

  // res.end(localStorage.getItem('index_copy.html'));
};



//stolen from the chatterbox solution
// exports.sendResponse = function(response, data, statusCode) {
//   statusCode = statusCode || 200;
//   response.writeHead(statusCode, headers);
//   response.end(JSON.stringify(data));
// };