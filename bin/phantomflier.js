#!/usr/bin/env node

'use strict';

var
  fs           = require('fs')
, phantomFlier = require('../lib')
, logger       = phantomFlier.logger
, phantom      = require('phantom-render-stream')
, config       = {};

// Include defaults: required for config object!
config.defaults = config.options;

// Build the config object using defauts and process
config = phantomFlier.options.buildConfig(config, process);

// Initialize Phantom.js
var render = phantom();

// Render with phantom, output to config'd path
render(config.paths.source, config.options)
  .pipe(
    fs.createWriteStream(config.paths.dest).on('end', function(){
      utils.logger.info('you did it!');
    }))
  .on('error', function(e){
    logger.error('there was an error with the phantom.js write stream:');
    console.log(e);
    process.exit(1);
  });
