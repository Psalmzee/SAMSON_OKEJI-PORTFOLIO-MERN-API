const express = require('express');
const cors = require("cors");
const blogRouter = require('./routes/blog.route')
const projectRouter = require('./routes/project.route')
const skillRouter = require('./routes/skill.route')


const app = express()

// middleware
app.use(express.json());
app.use(cors());

// routes
app.use('/api/blogs', blogRouter)
app.use('/api/projects', projectRouter)
app.use('/api/skills', skillRouter)


// home/test route
app.get('/', (req, res) => {
    return res.json({ 
        status: true,
        message: "Home/test Route!"
    })
})


// 404 route
app.use('*', (req, res) => {
    return res.status(404).json({ 
        message: 'Route not Found!'
     })
})

module.exports = app;
