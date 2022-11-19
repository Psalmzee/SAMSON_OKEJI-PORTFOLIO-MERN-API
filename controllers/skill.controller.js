const skillsSchema = require('../models/skill.model')

exports.createSkill = async (req, res) => {
    const skill = req.body;
    const newSkill = await skillsSchema.create(skill)
    
    return res.status(201).json({
       status: true,
       message: 'Skill Created!',
       newSkill })
}


exports.getSkills  = async (req, res) => {

  const skills = await skillsSchema.find({})

  return res.status(200).json({ 
    status: true, 
    skills })
}

exports.getSkill = async (req, res) => {
    const { skill_Id } = req.params;
    const skill = await skillsSchema.findById(skill_Id)

    if (!skill) {
        return res.status(404).json({ 
          status: false, 
          skill: null,
          message: 'Skill not Found!' })
    }

    return res.status(200).json({ 
      status: true, 
      skill })
}



exports.updateSkill = async (req, res) => {
    const { skill_Id } = req.params;
    const { skillState } = req.body;

    const skill = await skillsSchema.findById(skill_Id)

    if (!skill) {
        return res.status(404).json({ 
          status: false, 
          skill: null,
          message: 'No Skill with this Id!' })
    }

    if (skillState < blog.skillState) {
        return res.status(422).json({ 
          status: false, 
          skill: null, 
          message: 'Invalid Operation!' })
    }

    blog.skillState = skillState;

    await skill.save()

    return res.json({ 
      status: true,
      message: 'Skill Updated!',
      skill })
}

exports.deleteSkill = async (req, res) => {
    const { skill_Id } = req.params;

    const skill = await Skills.deleteOne({ _id: skill_Id})

    return res.json({ 
      status: true,
      message: 'Skill Deleted!',
      skill })
}
