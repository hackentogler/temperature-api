'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.searchGET = function searchGET (req, res, next) {
  var key = req.swagger.params['key'].value;
  Default.searchGET(key)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.searchPOST = function searchPOST (req, res, next) {
  var filter = req.swagger.params['filter'].value;
  Default.searchPOST(filter)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
