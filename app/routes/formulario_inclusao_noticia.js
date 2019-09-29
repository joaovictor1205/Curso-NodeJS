module.exports = function(app){
    app.get('/formulario_inclusao_noticia', function(req,res){
        res.render('admin/admin');
    });

    app.post('/noticias/salvar', function(req,res){
        var noticia = req.body;

        var connection = app.config.dbConnection();
        var noticiasModel = new app.app.models.noticiasDAO(connection);

        noticiasModel.salvarNoticia(noticia, function(erro,result){
            res.redirect('/noticias');
        });
    });
}