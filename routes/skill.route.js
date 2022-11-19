const express = require('express');
const skillRouter = express.Router()
const skillController = require('../controllers/skill.controller')


skillRouter.route('/')
  .post(skillController.createSkill)
  .get(skillController.getSkills)


skillRouter.route('/:id')
  .get(skillController.getSkill)
  .patch(skillController.updateSkill)
  .delete(skillController.deleteSkill)


module.exports = skillRouter
