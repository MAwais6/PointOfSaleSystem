const express = require('express')
const router = express.Router()

// require the customer routes
const customerRoutes = require("./customer.routes.js")


router.use("/api/customer", customerRoutes)

// our routes are 
router.get("/" , (req,res) => {
    res.send("index")
})

// export the router
module.exports = router;