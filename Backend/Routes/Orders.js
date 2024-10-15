const express = require('express')
const router = express.Router()
const {createOrder} = require('../Controllers/OrderController')

router.route('/order').post(createOrder)

module.exports = router;