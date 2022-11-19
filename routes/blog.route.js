const express = require('express');
const blogRouter = express.Router()
const blogController = require('../controllers/blog.controller')


blogRouter.route('/')
  .post(blogController.createBlog)
  .get(blogController.getBlogs)


blogRouter.route('/:id')
  .get(blogController.getBlog)
  .patch(blogController.updateBlog)
  .delete(blogController.deleteBlog)


module.exports = blogRouter
