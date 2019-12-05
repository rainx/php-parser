// initialize the php parser factory class
var fs = require('fs');
var path = require('path');
var engine = require('./src/index');

// initialize a new parser instance
var parser = new engine({
  // some options :
  parser: {
    extractDoc: true,
    php7: true
  },
  ast: {
    withPositions: true
  }
});


// Load a static file (Note: this file should exist on your computer)
var phpFile = fs.readFileSync( './test.php' );

// Log out results
console.log( 'Tokens parse:', parser.tokenGetAll(phpFile));
console.log( 'File parse:', parser.parseCode(phpFile) );
