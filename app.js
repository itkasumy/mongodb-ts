const express = require('express');
const mongoose = require('mongoose');

const app = express();
// Connection URL
const DB_url = 'mongodb://localhost:27017/ksm';

mongoose.connect(DB_url)

mongoose.connection.on('connected', () => {
  console.log('mongo connect success')
})

const User = mongoose.model('user', mongoose.Schema({
  name: {type: String, require: true},
  age: {type: Number, require: true}
}))

// User.create({name: 'ly', age: 18}, (err, doc) => {
//   err ? console.log(err) : console.log(doc)
// })

User.remove({age: undefined}, (err, doc) => {
  err ? console.log(err) : console.log(doc)
})

User.update({user: 'ksm'}, {'$set': {age: 24}}, (err, doc) => {
  err ? console.log(err) : console.log(doc)
})

app.get('/', (req, res) => {
  res.send('<h1>Hello Express!</h1>')
})

app.get('/data', (req, res) => {
  User.find({}, (err, doc) => {
    err ? console.log(err) :  res.json(doc)
  })
})

app.listen(8080);
