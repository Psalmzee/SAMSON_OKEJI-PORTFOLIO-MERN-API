const projectsSchema = require('../models/project.model')

exports.createProject = async (req, res) => {
    const project = req.body;
    const newProject = await projectsSchema.create(project)
    
    return res.status(201).json({
       status: true,
       message: 'Project Created!',
       newProject })
}


exports.getProjects  = async (req, res) => {

  const projects = await projectsSchema.find({})

  return res.status(200).json({ 
    status: true, 
    projects })
}

exports.getProject = async (req, res) => {
    const { projectId } = req.params;
    const project = await projectsSchema.findById(projectId)

    if (!project) {
        return res.status(404).json({ 
          status: false, 
          project: null,
          message: 'Project not Found!' })
    }

    return res.status(200).json({ 
      status: true, 
      project })
}



exports.updateProject = async (req, res) => {
    const { projectId } = req.params;
    const { projectState } = req.body;

    const project = await Blogs.findById(blogId)

    if (!project) {
        return res.status(404).json({ 
          status: false, 
          project: null,
          message: 'No Project with this Id!' })
    }

    if (projectState < blog.projectState) {
        return res.status(422).json({ 
          status: false, 
          project: null, 
          message: 'Invalid Operation!' })
    }

    project.projectState = projectState;

    await project.save()

    return res.json({ 
      status: true,
      message: 'Project Updated!',
      project })
}

exports.deleteProject = async (req, res) => {
    const { projectId } = req.params;

    const project = await projectsSchema.deleteOne({ _id: projectId})

    return res.json({ 
      status: true,
      message: 'Project Deleted!',
      project })
}
