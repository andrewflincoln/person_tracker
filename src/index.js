const express = require('express')
const mongoose = require('mongoose')

const app = express()

const mongoUri = 'mongodb+srv://admin:passwordpassword@cluster0.yp4be.mongodb.net/<dbname>?retryWrites=true&w=majority'

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
  console.log('connected to Mongo instance')
})
mongoose.connection.on('error', (err) => {
  console.error('Error connecting to Mongo', err)
})

app.get('/', (req, res) => {
  res.send('Hi there!')
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})