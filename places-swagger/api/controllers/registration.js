'use strict';
var util = require('util');
var dummyjson=require('dummy-json');
var jstoxml=require('jstoxml')
var o2x=require('object-to-xml')


var scheme={"name":"{{@guid}}"};
var scheme='[{{#repeat 10}}'+scheme+'{{/repeat}}]';
/*
 'use strict' is not required but helpful for turning syntactical errors into true errors in the program flow
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
*/

/*
 Modules make it possible to import JavaScript files into your application.  Modules are imported
 using 'require' statements that give you a reference to the module.

  It is a good idea to list the modules that your application depends on in the package.json in the project root
 */


/*
 Once you 'require' a module you can reference the things that it exports.  These are defined in module.exports.

 For a controller in a127 (which this is) you should export the functions referenced in your Swagger document by name.

 Either:
  - The HTTP Verb of the corresponding operation (get, put, post, delete, etc)
  - Or the operationId associated with the operation in your Swagger document

  In the starter/skeleton project the 'get' operation on the '/hello' path has an operationId named 'hello'.  Here,
  we specify that in the exports of this module that 'hello' maps to the function named 'hello'
 */
module.exports.getDate = function getDate(req,res,next){
  var username=req.param("username");
  var users={};
  users['application/json']=JSON.parse(dummyjson.parse(scheme));
  if (Object.keys(users).length>0){
    res.setHeader('Content-Type','application/json');
    res.json(users[Object.keys(products)[0]]);
  }else{
    res.end();
  }
};
module.exports.getDate=function getDate(req,res,next){
  var username=req.query.username || 'qqq';
  var pageSize = req.query.pageSize || 10;
  var pageNumber =req.query.pageNumber || 1;

  var users={};
  users['application/json']=JSON.parse(dummyjson.parse(scheme),{mockdata:{"username":username}});
  if (Object.keys(users).length>0){
    res.setHeader('Content-Type','application/json');
    res.json(users[Object.keys(products)[0]]);
  }else{
    res.end();
  }
}
/*
  Functions in a127 controllers used for operations should take two parameters:

  Param 1: a handle to the request object
  Param 2: a handle to the response object
 */
