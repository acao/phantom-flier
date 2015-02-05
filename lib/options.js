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

  // Add remaining stuff on argv to config.options
  _.extend(config.options, argv);

  // Make sure both paths are available
  if (config.args.length < 2) {
    logger.log('error', 'Supply both source url and destination!');
  };

  config.paths = {
    source : config.args[0],
    dest: config.args[1],
  }

  return config;
}

var options = {
  buildConfig: buildConfig
}
module.exports = options;
