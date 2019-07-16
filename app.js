var app = require('./config/server');


var rota_noticias = require('./app/routes/noticias')(app);

var rota_formulario_inclusao_noticia = require('./app/routes/formulario_inclusao_noticia')(app);

var rota_home = require('./app/routes/home')(app);

app.listen(3000, function(){
    console.log('Servidor ON');
});
