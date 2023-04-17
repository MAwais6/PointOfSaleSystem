const controller = require("../controller/dashboard.controller.js")
const { authJwt } = require("../middleware/index.middleware.js")
const express = require('express')
const router = express.Router()

// create a new customer
router.get("/dashboard",[authJwt.verifyToken] ,controller.customerDashboard)

// export the router
module.exports = router;





