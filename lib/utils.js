/**
 * Various utilities
 */

'use strict';

var logger  = require("eazy-logger").Logger({
  prefix: "{cyan:[}{blue:phantomflier}{cyan:] }",
  useLevelPrefixes: true
});


var utils = {
  logger: logger
}

module.exports = utils;
