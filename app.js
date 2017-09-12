var express = require('express')
var app = express()
var path = require('path')

app.set('view engine', 'pug')

app.listen('3000', function(req, res){
  console.log('Port Set To 3000')
})

app.get('/', function(req, res){
  console.log('THESE ARE THE REQUEST PARAMETERS =====>', req)
  res.render('homePage')
})

app.get('/404', function(req, res){
  res.render('error')
})
