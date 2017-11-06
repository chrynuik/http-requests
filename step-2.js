var https = require('https');

function getAndPrintHTML () {
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */
  https.get(requestOptions, function(response){

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

console.log(getAndPrintHTML());

