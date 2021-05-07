const router = require('express').Router()
const jurusanController = require('../controller/jurusan')

router.post('/insert', (req, res) => {
    jurusanController.create(req.body)
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

router.get('/getall', (req, res) => {
    jurusanController.getAll(req.body)
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

router.get('/getbyid/:id', (req, res) => {
    jurusanController.getById(req.params.id)
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

router.put('/update/:id', (req, res) => {
    jurusanController.update(req.params.id, req.body)
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

router.delete('/delete/:id', (req, res) =>{
    jurusanController.delete(req.params.id)
        .then(result => res.json(result))
        .catch(result => res.json(err))
})

module.exports = router