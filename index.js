var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res){
   res.send('<h3>Hello World</h3>');
});

http.listen(3000, function () {
    console.log('listening on port 3000');
});