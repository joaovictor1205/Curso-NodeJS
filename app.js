var express = require('express');
var app = express();


app.get('/', function(req,res){
    res.send('<html><body>Oi</body></html>');
})


app.get('/tecnologia', function(req,res){
    res.send('<html><body>Tecnologia</body></html>');
})


app.get('/moda', function(req,res){
    res.send('<html><body>Moda</body></html>');
})


app.listen(3000, function(){
    console.log("Servidor OK");
});
