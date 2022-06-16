const express = require('express')
const router= express.Router()
const{categorycontrollerfunc, postCategory, categoryList}=require('../controller/categoryconroller')

router.get('/welcome', categorycontrollerfunc)
router.post('/postcategory',postCategory)
router.get('/categorylist', categoryList)

module.exports= router