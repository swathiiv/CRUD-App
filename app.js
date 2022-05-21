const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/AlienDBex'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const alienrouter= require('./routers/aliens')
app.use('/aliens',alienrouter);

app.listen(9000,function() {
    console.log('Server connected')
})