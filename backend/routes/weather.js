const express = require('express')
const axios = require('axios')
const router = express.Router()

router.get('/', async (req,res)=>{
  const { lat, lon } = req.query
  if(!lat || !lon) return res.status(400).json({error:'lat, lon required'})
  try{
    // Replace with OpenWeather API call using process.env.OPENWEATHER_KEY
    return res.json({ temp: 28, humidity: 82, rain: 10 })
  }catch(err){
    console.error(err)
    res.status(500).json({error:'weather fetch failed'})
  }
})

module.exports = router
