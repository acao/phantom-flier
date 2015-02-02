/**
* Handling options parsing
*/

'use strict';

var minimist  = require('minimist')
,   logger    = require('./utils').logger
, _           = require('lodash');


var buildConfig = function(config, process){
  var minimistOptions = {
    // string: ['output', 'exclude'],
    // boolean: ['useLocal'],
    // alias: {
    //   output: 'o',
    //   'use-local': 'useLocal',
    //   incompatible: 'i',
    // },
    default: config.defaults
  };

  var argv = minimist(process.argv.slice(2), minimistOptions);

  // Assign arguments
  config.args = argv._;

  // Remove arguments, only options
  delete argv._;

  _.extend(config.options, argv);

  if (config.args.length < 2) {
    logger('{error:Supply both source url and destination!');
    process.exit(126)
  };

  config.paths = {
    source : config.args[0],
    dest: config.args[1],
  }
  console.log(config);
  return config;
}

var isValid = function(config) {
  var is Valid
}

var options = {
  buildConfig: buildConfig
}
module.exports = options;
