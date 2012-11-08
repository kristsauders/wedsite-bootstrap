var express = require('express'),
    app = express()
    util  = require('util');
    
app.use(express.static(__dirname));
app.use(express.bodyParser());

app.listen(8085);
//app.listen(8085, '127.0.0.1');

console.log('Started up successfully.');
