module.exports = (app) => {
    const ObjectId = require('mongodb').ObjectId;

      // Rota para listar tiporequisicao
      app.get('/tiporequisicao', (req, res) => {
        //res.send('retornar tiporequisicao');
        db.collection('tiporequisicao').find().toArray((err, results)=>{
            if (err) throw err;
            res.json(results);
        });
    });

    // Rota para inclusao tiporequisicao
    app.post('/tiporequisicao', (req, res, next) => {
        db.collection('tiporequisicao').insertOne(req.body, (err, result) => {
            if (err) throw err;
            res.json({success: "Incluído com sucesso."});
        })
    });

    app.put('/tiporequisicao', (req, res) => {
        var id = ObjectId(req.body._id);
        var newvalues = {$set:{
            nome: req.body.nome,
            tipo: req.body.tipo,
            idade: req.body.idade
        }};
        db.collection('tiporequisicao').updateOne(
            {_id: id},
            newvalues,
            (err, result) => {
            if (err) throw err;
            if (result.modifiedCount < 1)
                return res.json({aviso: "Nada alterado."});
            res.json({success: "Alterado com sucesso."});
        })
    });

    app.delete('/tiporequisicao/:id', (req, res) => {
        var id = ObjectId(req.params.id);
        db.collection('tiporequisicao').deleteOne({_id: id}, (err, result)=>{
            if (err) throw err;
            if (result.deletedCount < 1)
                return res.json({aviso: "Nada excluído." });
            res.json({success: "Excluído com sucesso." });
        });
    });

    app.get('/tiporequisicao/:id', (req, res) => {
        var id = ObjectId(req.params.id);
        db.collection('tiporequisicao').findOne({_id: id}, (err, result)=>{
            if (err) throw err;
            res.json(result);
        });
    });

    app.get('/tiporequisicao/filtro/:valor' , (req, res) => {
        db.collection('tiporequisicao').find({
        $or: [
            { nome: { $regex: req.params.valor, $options: "i" } },
            { tipo: { $regex: req.params.valor, $options: "i" } },
        ],
        }).toArray((err, results)=>{
            if (err) throw err;
            res.json(results);
        });
    });


}