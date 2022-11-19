const express = require('express');
const cors = require("cors");
const textRouter = require('./routes/text.route')

const app = express()

// middleware
app.use(express.json());
app.use(cors());

// routes
app.use('/api/texts', textRouter)

// home route
app.get('/', (req, res) => {
    return res.json({ 
        status: true,
        message: "Home Route!"
    })
})

// 404 route
app.use('*', (req, res) => {
    return res.status(404).json({ message: 'Route not Found' })
})

module.exports = app;
