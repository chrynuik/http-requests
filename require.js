var getHTML = require('./http-functions');

var options = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};
getHTML(options, function printHTML (html) {
  console.log(html);
});

