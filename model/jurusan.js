const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const jurusanSchema = new Schema({
    namaJurusan: {
        type : String
    },

    Nama: {
        type : String
    },
    Npm: {
        type : Number
    },

    Fakultas: {
        type : String
    },

    Prodi: {
        type : String
    }
})

module.exports = mongoose.model('jurusan', jurusanSchema)