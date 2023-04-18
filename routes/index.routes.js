const express = require('express')
const router = express.Router()

// require the routes
const customerRoutes = require("./customer.routes.js")
const authRoutes = require("./auth.routes.js")


// use the routes
router.use("/api/customer", customerRoutes)
router.use("/api/auth", authRoutes)

// our routes are 
router.get("/" , (req,res) => {
    res.send("index")
})

// export the router
module.exports = router;