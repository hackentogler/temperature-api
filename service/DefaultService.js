'use strict';


/**
 * The endpoint to log a temperature reading.
 *
 * key String 
 * returns List
 **/
exports.searchGET = function(key) {
  // TODO: add appending to csv
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "anotherKey" : `${key} value`,
  "key" : "key"
}, {
  "anotherKey" : `return of ${key} value`,
  "key" : "key"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * The endpoint to log a temperature reading.
 *
 * filter Entry 
 * returns List
 **/
exports.searchPOST = function(filter) {
  // TODO: add appending to csv
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "anotherKey" : "anotherKey",
  "key" : "key"
}, {
  "anotherKey" : "anotherKey",
  "key" : "key"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

