#!/usr/bin/env node

'use strict';

var
  fs           = require('fs')
, _            = require('lodash')
, utils        = require('../lib/utils')
, chalk        = require('chalk')
, phantomFlier = require('../lib')
, phantom      = require('phantom-render-stream')
, pictureTube  = require('picture-tube')
, config       = {};

// Include defaults: required for config object!
config.defaults = config.options = require('../defaults.json');

// Build the config object using defauts and argv
config = phantomFlier.options.buildConfig(config, process);

// Initialize Phantom.js
var render = phantom(),

// Build the output path
outputpath = [process.cwd(), config.paths.dest].join("/");

// Render with phantom, output to config'd path
render(config.paths.source, config.options)
  .pipe(fs.createWriteStream(outputpath))
  .on('error', function(e){
    utils.logger.log('error', 'whoops');
    console.log(e);
  }).on('end', function(){
    utils.logger.log('info', 'win!');
});
