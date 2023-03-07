const express = require('express')
const router = express.Router()

//import functions
const {homePage} = require("../controller/homePage")


// our routes are 
router.get("/" , (req,res) => homePage(req,res))





// export the router
module.exports = router;