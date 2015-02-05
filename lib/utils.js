/**
 * Various utilities
 */

'use strict';



var
  chalk       = require('chalk')
, _           = require('lodash');

var logger  = require("tfunk").Logger({
  prefix: "{cyan:[}{blue:phFlier}{cyan:] }",
  prefixes: {
    debug: "DEBUG",
    info:  "INFO",
    warn:  "WARN",
    error: "ERROR"
  }
});


var utils = {
  logger: logger
}

module.exports = utils;
