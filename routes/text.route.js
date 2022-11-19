const express = require('express');
const textRouter = express.Router()
const textController = require('../controllers/text.controller')


textRouter.route('/')
  .post(textController.createText)
  .get(textController.getTexts)
  .delete(textController.deleteText)

module.exports = textRouter
