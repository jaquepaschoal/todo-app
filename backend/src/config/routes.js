const express = require('express')

module.exports = function(server) {

  //api routes
  const router = express.Router()
  server.use('/api',router)

  //todo routes
  const todoService = require('../api/todo/todoservice')
  todoService.register(router,'/todos')

}