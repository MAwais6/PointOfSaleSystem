const express = require('express')
const router = express.Router()

//import functions
const {homePage} = require("../controller/homePage")
const {aboutPage} = require("../controller/aboutPage")
const {contactPage} = require("../controller/contactPage")
const {loginPage} = require("../controller/loginPage")
const {signupPage} = require("../controller/signupPage")
const {createBillPage} = require("../controller/createBillPage")
const {profitsPage} = require("../controller/profitsPage")
const {showlowStockPage} = require("../controller/showlowStockPage")
const {showOrdersPage} = require("../controller/showOrdersPage")


// our routes are 
router.get("/" , (req,res) => homePage(req,res))
router.get("/aboutus" , (req,res) => aboutPage(req,res))
router.get("/contactus" , (req,res) => contactPage(req,res))
router.get("/login" , (req,res) => loginPage(req,res))
router.get("/signup" , (req,res) => signupPage(req,res))
router.get("/createbill" , (req,res) => createBillPage(req,res))
router.get("/profits" , (req,res) => profitsPage(req,res))
router.get("/showlowstock" , (req,res) => showlowStockPage(req,res))
router.get("/showorders" , (req,res) => showOrdersPage(req,res))


// export the router
module.exports = router;