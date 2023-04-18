const controller = require("../controller/dashboard.controller.js")
const { authJwt } = require("../middleware/index.middleware.js")
const express = require('express')
const router = express.Router()

// require the routes
const productRoutes = require("./products.routes.js")

// use the routes
router.get("/dashboard",[authJwt.verifyToken] ,controller.customerDashboard)

router.use("/products", [authJwt.verifyToken] , productRoutes)

// export the router
module.exports = router;