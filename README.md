# Phantom Flier
**A wkhtmltopdf-esque cli using phantom.js and node.js!**

## Background

I migrated a client to an excellent new PAAS solution. Our application required the incredibly powerful wkhtmltopdf binary, which was not possible in their containerized application environment.

Their reasoning was sound - why install this package that require Xorg dependencies (defeating the purpose of containerization) when there are so many other ways to achieve this goal?

## Named in honor of a Badass Naval Aviator

This module is named for my grandfather and namesake, [Capt. Richard Schulte Sr., USN,][abd9814b] who passed away shortly after I began writing this module.

  [abd9814b]: http://www.cleveland.com/metro/index.ssf/2015/01/naval_aviator_richard_schulte.html "Plain Dealer News Obit"

He was a cutting edge pilot and fleet captain who helped introduce the F4 Phantom to fighter and air to ground combat. His work with the F4 Phantom found him helping to create what would become known as the Top Gun academy.

![Capt. Richard Schulte Sr., USN](http://imgick.cleveland.com/home/cleve-media/width620/img/plain_dealer_metro/photo/16868703-mmmain.jpg)

He introduced tactics that helped preserve the lives of pilots who were in constant peril by focusing on fighter air-to-ground combat against SAM sites. Phantom F4s were the fighter jet that could handle those payloads.

This module introduces a node.js package as a feature-full binary (which probably has already been done before) that may save system resources and solve server scalability woes. Not the same as saving lives but hey, whatever helps.

## Installation

```
npm i -g phantomflier
```
Additionally, you can install it to a project, and provide a local config file for execution in that environment.

```
npm i --save phantomflier
```

## Usage

There are two ways to use phantomflier - the CLI and/or a phantomflier.js file.

### Basic CLI Usage

```
~$: phantomflier input/path/or/url output/path/with.ext --phantom-render-stream-options
```
#### Example

```
~$: phantomflier http://google.com ~/Pictures/google.pdf --format pdf --orientation landscape
```

### Blobs?!

In theory, any stream source/dest param, arrays or blobs, that you would pass to, say, a gulp task are possible.

For example:

```
~$: phantomflier ./build/**/*.html ./_gh_pages/archive/
/ --format pdf --pool 3 --timeout 2000 --paper-format Letter
```
That would be fun to try!

### Configfiles ftw

(this may not work properly yet!)

If there is a phantomflier.js file in your cwd, or you pass a --config param with a path to a config, you are golden for some json preconfiguration action!

The CLI overrides the default config - whether provided by this module, or your config as provided above.


## Options

Because this is basically a wrapper of [phantom-render-stream](https://www.npmjs.com/package/phantom-render-stream), you can use any of it's options:
```js
var render = phantom({
  pool        : 5,           // Change the pool size. Defaults to 1
  timeout     : 1000,        // Set a render timeout in milliseconds. Defaults to 30 seconds.
  tmp         : '/tmp',      // Set the tmp where tmp data is stored when communicating with the phantom process.
  //   Defaults to /tmp if it exists, or os.tmpDir()
  format      : 'jpeg',      // The default output format. Defaults to png
  quality     : 100,         // The default image quality. Defaults to 100. Only relevant for jpeg format.
  width       : 1280,        // Changes the width size. Defaults to 1280
  height      : 800,         // Changes the height size. Defaults to 960
  paperFormat : 'A4',        // Defaults to A4. Also supported: 'A3', 'A4', 'A5', 'Legal', 'Letter', 'Tabloid'.
  orientation : 'portrait',  // Defaults to portrait. 'landscape' is also valid
  margin      : '0cm',       // Defaults to 0cm. Supported dimension units are: 'mm', 'cm', 'in', 'px'. No unit means 'px'.
  userAgent   : '',          // No default.
  headers     : {Foo:'bar'}, // Additional headers to send with each upstream HTTP request
  paperSize:  : null,        // Defaults to the paper format, orientation, and margin.
  crop        : false,       // Defaults to false. Set to true or {top:5, left:5} to add margin
  printMedia  : false,       // Defaults to false. Force the use of a print stylesheet.
  maxErrors   : 3,           // Number errors phantom process is allowed to throw before killing it. Defaults to 3.
  expects     : 'something', // No default. Do not render until window.renderable is set to 'something'
  retries     : 1,           // How many times to try a render before giving up. Defaults to 1.
  phantomFlags: ['--ignore-ssl-errors=true'] // Defaults to []. Command line flags passed to phantomjs
  maxRenders  : 20,          // How many renders can a phantom process make before being restarted. Defaults to 20

  injectJs    : ['./includes/my-polyfill.js'] // Array of paths to polyfill components or external scripts that will be injected when the page is initialized
  });
```


### Other Options

-v, -vv, -vvv for more verbose output

## Example Config File

```js
var defaultConfig = {
  "options": {
    "format": "Letter",
    "orientation": "landscape",
    "format" : "pdf",
    "margin": "15mm"
  },
  "paths": {
    "source": ""
    "dest": " "
  }
}

module.exports = defaultConfig;
```

## Testing

Forthcoming!


## TODO

- [ ] unit and acceptance tests using tape and ??, plus travis
- [ ] actually implement the config file thing I talk about
- [ ] array/blob logic and error handling
- [ ] [picture-tube](http://github.com/substack/picture-tube) --preview flag for lols
