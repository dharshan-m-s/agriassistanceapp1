const express = require('express')
const router = express.Router()

router.get('/', async (req,res)=>{
  const { lat, lon } = req.query
  if(!lat || !lon) return res.status(400).json({error:'lat, lon required'})
  try{
    // Replace with Bhuvan API call using process.env.BHUVAN_KEY
    return res.json({ type: 'Clay Loam', ndvi: 0.42, crop_cover: 'Tomato' })
  }catch(err){
    console.error(err)
    res.status(500).json({error:'soil fetch failed'})
  }
})

module.exports = router
