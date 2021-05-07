const express = require('express')
const app = express()
const mongoose = require('mongoose')

//connect ke database
mongoose.connect('mongodb://localhost:27017/Uts', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Berhasil Connect ke Database'))
  .catch(() => console.log('Gagal Connect ke Database'))

app.use(express.json({
  extended: true,
  limit: '20mb'
}))

app.use(express.urlencoded({
  extended: true,
  limit: '20mb'
}))
 
app.use('/jurusan', require('./routes/jurusan'))

app.listen(3000, () =>{
    console.log('server started')
})