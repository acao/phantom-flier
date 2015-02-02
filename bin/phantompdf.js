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


phantomFlier.options.buildConfig(config, process, function (err, options) {
  if (err) {
      console.log("Error while processing " + file + ":");
      console.log(err);
    } else {
      if (phantomFlier.options.isValid(options)) {
        var render = phantom(),
        outputpath = [process.cwd(), config.paths.dest].join("/");
        render(config.paths.source, config.options)
        .pipe(fs.createWriteStream(outputpath));
      } else {
        console.log(html);
      }
    }

});






// fs.writeFile(outputpath, 'Example Output', function (err) {
//   if (err) throw err;
// });


      // .pipe();
// process.exit(0);

// _.each(argv._, function (file) {
//   phantompdf.processPage(file, argv, function (err, html) {
//     if (err) {
//       console.log("Error while processing " + file + ":");
//       console.log(err);
//     } else {
//       if (argv.output) {
//         console.log("Saved to " + argv.output + ".");
//       } else {
//         console.log(html);
//       }
//     }
//   });
// });
