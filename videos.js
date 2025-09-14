const express = require('express')
const router = express.Router()

router.get('/', async (req,res)=>{
  const q = req.query.q || 'crop disease'
  // Replace with YouTube Data API call using process.env.YOUTUBE_KEY
  res.json([
    { id: 'v1', title: 'Spraying fungicide correctly', thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', source: 'YouTube' }
  ])
})

module.exports = router
