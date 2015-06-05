/**
* Handling options parsing
*/

'use strict';

var minimist  = require('minimist')
,   logger    = require('./utils').logger
,   fs        = require('fs')
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

  // Remove arguments, only option params
  delete argv._;

  config.options = {};

  // Add CLI option params on argv to config.options
  config.options = _.assign(config.options, argv);

  whichConfig(config, process)



  // Make sure both paths are available
  if (config.args.length < 2) {
    logger.error('Supply both source url and destination!');
    process.exit(1);
  };

  config.paths = {
    source : config.args[0],
    dest: config.args[1],
  }

  return config;
}

var whichConfig = function(config, process){
  // override with local or specified config!
  var configFileName      = '/phantomflier.js'
  ,   localConfigExists   = false
  ,   hasConfigParam      = false
  ,   localConfigFile     = process.cwd() + configFileName
  ,   hasOptions      =   _.has(config, 'options') && typeof config.options == 'object';

  if(fs.existsSync(localConfigFile)){
    localConfigExists = true;
  }

  if (hasOptions){
    if (_.has(config.options, 'config')){
      var configParam         = config.options.config;
      hasConfigParam   = fs.existsSync(configParam);
    }
  }

  if( hasConfigParam && fs.existsSync(configParam)) {
    // if(!localConfigExists) {
    //   logger.info('Config path specified');
    // }
    if(localConfigExists) {
      logger.info('Config path specified, overriding local config');
      // Be sure to load the local config first
      config = _.assign(config, require(localConfigFile));
    }
    // Assign specified config to config object
    config = _.assign(config, require(configParam));
  }
  // If no config is specified but there is a local one, go for it!
  else if (!hasConfigParam && localConfigExists) {
    logger.info('Loading the local config!');
    // Add local config options to config object
    config = _.assign(config, require(localConfigFile));
  }
  else if( hasConfigParam && _.has(config.options, 'config')){
    logger.error('Arg specified but theres nothing to back it up');
    process.exit(1);
  }
}

var options = {
  buildConfig: buildConfig
}
module.exports = options;
