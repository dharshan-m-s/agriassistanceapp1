const express = require('express')
const router = express.Router()

router.post('/create', async (req,res)=>{
  const { productId, farmerId, applySubsidy } = req.body
  // TODO: integrate payment gateway, subsidy check, invoice creation
  res.json({ orderId: 'ORD-123', productId, price: 300, subsidyApplied: applySubsidy? true : false, invoiceUrl: '/mock-invoice.pdf' })
})

module.exports = router
