// 数据模拟
var getIPAdress = require('../build/get-ip-adress')
var express = require('express')
var router = require('./data')

var bodyParser = require('body-parser')

var app = express()

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// app.use('/Content', express.static('E:\\_work\\sd.pi\\src\\sd.pi.wxweb\\Content')) // 静态资源

app.use('/', router)
var server = app.listen(3003, getIPAdress(), function () {
  var host = server.address().address
  var port = server.address().port
  console.log('Example app listening at http://%s:%s', host, port)
})
