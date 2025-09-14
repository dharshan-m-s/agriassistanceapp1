const express = require('express')
const multer = require('multer')
const router = express.Router()
const upload = multer({ dest: 'uploads/' })

router.post('/', upload.single('image'), async (req, res) => {
  const mock = {
    disease: 'Tomato Leaf Blight',
    confidence: 0.87,
    recommended: {
      name: 'Copper Oxychloride 50% WP',
      dosage: '250g per acre',
      organic: 'Neem extract (alternate)',
      priceBefore: 500,
      priceAfter: 300
    },
    weather: { temp: 28.3, humidity: 86, rain: 12 },
    soil: { type: 'Clay Loam', ndvi: 0.42 },
    videos: [
      { id: 'v1', title: 'How to spray Copper Oxychloride', thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', source: 'YouTube' }
    ]
  }

  res.json(mock)
})

module.exports = router
