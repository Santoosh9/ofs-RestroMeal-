const express = require('express')
const { AdminRoutes } = require('../controller/Admincontroller')
const { userRegister, login, Logout } = require('../controller/registercontroller')
const router= express.Router()


router.post('/register', userRegister)
router.post('/login', login)
// router.post('/logout',Logout)
router.post('/Admin', AdminRoutes)

module.exports=router