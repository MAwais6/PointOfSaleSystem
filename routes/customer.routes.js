const controller = require("../controller/dashboard.controller.js")
const { authJwt } = require("../middleware/index.middleware.js")
const express = require('express')
const router = express.Router()

// require the routes
const productRoutes = require("./products.routes.js")
const categoryRoutes = require("./category.routes.js")
const subCategoryRoutes = require("./subcategory.routes.js")

// use the routes
router.get("/dashboard",[authJwt.verifyToken] ,controller.customerDashboard)

router.use("/products", [authJwt.verifyToken] , productRoutes)
router.use("/category", [authJwt.verifyToken] , categoryRoutes)
router.use("/subcategory", [authJwt.verifyToken] , subCategoryRoutes)

// export the router
module.exports = router;