const jurusanModel = require ('../model/jurusan')
const objectId = require('mongoose').Types.ObjectId

exports.create = (data) =>
    new Promise((resolve, reject) => {
        jurusanModel.create(data)
        .then(() => {
        resolve({
        status: true,
        pesan: 'Berhasil Input jurusan'
    })
        }).catch(() => reject({
        status: false,
        pesan: 'Gagal Input jurusan'
    }))
    })

exports.getAll = () =>
    new Promise((resolve, reject) => {
        jurusanModel.find()
        .then(result => {
         resolve({
            status: true,
            pesan: 'Berhasil Menampilkan Data',
            result: result
            })
        }).catch(() => reject({
            status: true,
            pesan: 'Gagal Mendapatkan Data',
            result: []
            }))
    })

exports.getById = (id) =>
    new Promise((resolve, reject) => {
        jurusanModel.findOne({
            _id: objectId(id)
        }).then(result => resolve({
            status: true,
            pesan: 'Berhasil Mendapatkan Data',
            result: result
        })).catch(() => reject({
            status: false,
            pesan: 'Gagal Mendapatkan Data',
            result: null
        }))
    })

exports.update = (id, data) =>
    new Promise((resolve, reject) => {
        jurusanModel.updateOne({
            _id: objectId(id)
        }, data).then(() => resolve({
            status: true,
            pesan: 'Berhasil Update Data'
        })).catch(() => reject({
            status: false,
            pesan: 'Gagal Update Data'
        }))
    })

exports.delete = (id) =>
    new Promise((resolve, reject) => {
        jurusanModel.deleteOne({
            _id: objectId(id)
        }).then(() => resolve({
            status: true,
            pesan: 'Berhasil Delete Data'
        })).catch(() => reject({
            status: false,
            pesan: 'Gagal Delete Data'
        }))
    })