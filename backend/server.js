require('dotenv').config()
const express = require('express')
const cors = require('cors')
const detect = require('./routes/detect')
const weather = require('./routes/weather')
const soil = require('./routes/soil')
const videos = require('./routes/videos')
const orders = require('./routes/orders')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/detect', detect)
app.use('/api/weather', weather)
app.use('/api/soil', soil)
app.use('/api/videos', videos)
app.use('/api/orders', orders)

const PORT = process.env.PORT || 4000
app.listen(PORT, ()=> console.log('Backend running on', PORT))
