module.exports = function getHTML (options, callback) {
    /* Your code here */
    var https = require('https');

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
};

function printHTML (html) {
  console.log(html);
}