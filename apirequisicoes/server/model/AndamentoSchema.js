const mongoose = require("mongoose");
const AndamentoSchema = new mongoose.Schema({
    datahora: { type: Date, required: true },
    titulo: { type: String, required: true },
    descricao: { type: String, required: true },
       
});
module.exports = mongoose.model("Andamento", AndamentoSchema);