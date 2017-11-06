var https = require('https');

var options = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

function getHTML (options, callback) {

  /* Add your code here */
  https.get(options, function(response){

    response.setEncoding('utf8');

    let chunk = '';

    response.on('data', function(data){

      chunk += data;
      return chunk;
    });

    response.on('end', function (){
      // const responseBodyObject = JSON.parse(responseBodyString);
      console.log(chunk);
    });

  });

}

function printHTML (html) {
  console.log(html);
}

getHTML(options, printHTML);

