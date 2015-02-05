## Phantom Flier
**A wkhtmltopdf-esque cli using phantom.js and node.js!**

## Installation

``npm i -g phantomflier``

## Usage

``phantomflier input/path/or/url output/path/with.ext --phantom-render-stream-options``

### Example usage

``phantomflier http://google.com ~/Pictures/google.pdf --format pdf --orientation landscape``

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

## Default Options

```js
{
  "format": "Letter",
  "orientation": "landscape",
  "format" : "pdf",
  "margin": "15mm"
}
```
