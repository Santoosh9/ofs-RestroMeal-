const express = require('express')
const router= express.Router()
const{AdminRoutes,foodList}=require('../controller/Admincontroller')

router.post('/admin', AdminRoutes)
router.get('/foodslist', foodList)

module.exports= router