const Blogs = require('../models/blog.model')

exports.createBlog = async (req, res) => {
    const blog = req.body;
    const newBlog = await Blogs.create(blog)
    
    return res.status(201).json({
       status: true,
       message: 'Blog Created!',
       newBlog })
}


exports.getBlogs  = async (req, res) => {

  const blogs = await Blogs.find({})

  return res.status(200).json({ 
    status: true, 
    blogs })
}

exports.getBlog = async (req, res) => {
    const { blogId } = req.params;
    const blog = await Blogs.findById(blogId)

    if (!blog) {
        return res.status(404).json({ 
          status: false, 
          order: null,
          message: 'Blog not Found!' })
    }

    return res.status(200).json({ 
      status: true, 
      blog })
}



exports.updateBlog = async (req, res) => {
    const { blogId } = req.params;
    const { blogState } = req.body;

    const blog = await Blogs.findById(blogId)

    if (!blog) {
        return res.status(404).json({ 
          status: false, 
          order: null,
          message: 'No Blog with this Id!' })
    }

    if (blogState < blog.blogState) {
        return res.status(422).json({ 
          status: false, 
          blog: null, 
          message: 'Invalid Operation!' })
    }

    blog.blogState = blogState;

    await blog.save()

    return res.json({
      status: true,
      message: 'Blog Updated!',
      blog })
}

exports.deleteBlog = async (req, res) => {
    const { blogId } = req.params;

    const blog = await Blogs.deleteOne({ _id: blogId})

    return res.json({ 
      status: true,
      message: 'Blog Deleted!',
      blog })
}
