const { verifySignUp} = require("../middleware/index.middleware.js")
const controller = require("../controller/customer.controller.js")
const express = require('express')
const router = express.Router()


// create a new customer
router.post("/signup", [verifySignUp.checkDuplicateUsernameOrEmail], controller.signup)

// sign in a customer
router.post("/signin", controller.signin)

// export the router
module.exports = router;


