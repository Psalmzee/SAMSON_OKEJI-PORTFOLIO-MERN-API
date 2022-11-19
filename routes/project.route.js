const express = require('express');
const projectRouter = express.Router()
const projectController = require('../controllers/project.controller')


projectRouter.route('/')
  .post(projectController.createProject)
  .get(projectController.getProjects)


projectRouter.route('/:id')
  .get(projectController.getProject)
  .patch(projectController.updateProject)
  .delete(projectController.deleteProject)


module.exports = projectRouter
