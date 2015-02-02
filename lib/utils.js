/**
 * Various utilities
 */

'use strict';



var
  chalk       = require('chalk')
, _           = require('lodash');
// , multiline    = require('multiline');

var logger  = require("tfunk").Logger({
  prefix: "{blue:[}{magenta:tFunk}{cyan:] }",
  prefixes: {
    debug: "{yellow:[debug]} ",
    info:  "{cyan:[info]} ",
    warn:  "{magenta:[warn]} ",
    error: "{red:[error]} "
  }
}).setLevelPrefixes(true).setLevel("debug");


var utils = {
  logger: logger
}

module.exports = utils;
