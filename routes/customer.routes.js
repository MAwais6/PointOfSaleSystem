const express = require('express')
const router = express.Router()

// require the customer controller
const customerController = require("../controller/customer.controller.js")

// create a new customer
router.post("/", customerController.create)

// export the router
module.exports = router;
