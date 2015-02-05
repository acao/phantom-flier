/**
 * Various utilities
 */

'use strict';



var
  chalk       = require('chalk')
, _           = require('lodash');

var logger  = require("eazy-logger").Logger({
  prefix: "{cyan:[}{blue:phantomflier}{cyan:] }",
  useLevelPrefixes: true
});


var utils = {
  logger: logger
}

module.exports = utils;
