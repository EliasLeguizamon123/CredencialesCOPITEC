const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const matriculadoSchema = new Schema(
    {
        nroMatricula: String,
        nombre: String,
        titulo: String,
        estado: Number,
        institucion: String,
        fechaAlta: String,
        
    }
);

module.exports = mongoose.model('matriculado', matriculadoSchema);