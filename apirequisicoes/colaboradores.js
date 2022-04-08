module.exports = (app) => {
    const ObjectId = require('mongodb').ObjectId;

      // Rota para listar colaborador
      app.get('/colaborador', (req, res) => {
        //res.send('retornar colaborador');
        db.collection('colaborador').find().toArray((err, results)=>{
            if (err) throw err;
            res.json(results);
        });
    });

    // Rota para inclusao colaborador
    app.post('/colaborador', (req, res, next) => {
        db.collection('colaborador').insertOne(req.body, (err, result) => {
            if (err) throw err;
            res.json({success: "Incluído com sucesso."});
        })
    });

    app.put('/colaborador', (req, res) => {
        var id = ObjectId(req.body._id);
        var newvalues = {$set:{
            nome: req.body.nome,
            tipo: req.body.tipo,
            idade: req.body.idade
        }};
        db.collection('colaborador').updateOne(
            {_id: id},
            newvalues,
            (err, result) => {
            if (err) throw err;
            if (result.modifiedCount < 1)
                return res.json({aviso: "Nada alterado."});
            res.json({success: "Alterado com sucesso."});
        })
    });

    app.delete('/colaborador/:id', (req, res) => {
        var id = ObjectId(req.params.id);
        db.collection('colaborador').deleteOne({_id: id}, (err, result)=>{
            if (err) throw err;
            if (result.deletedCount < 1)
                return res.json({aviso: "Nada excluído." });
            res.json({success: "Excluído com sucesso." });
        });
    });

    app.get('/colaborador/:id', (req, res) => {
        var id = ObjectId(req.params.id);
        db.collection('colaborador').findOne({_id: id}, (err, result)=>{
            if (err) throw err;
            res.json(result);
        });
    });

    app.get('/colaborador/filtro/:valor' , (req, res) => {
        db.collection('colaborador').find({
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