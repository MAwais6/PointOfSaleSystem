const express = require("express")
const router = express.Router()
const payment = require("../controller/payment.controller")

router.post("/", payment.create)
router.get("/", payment.findAll)
router.get("/:O_ID", payment.findOne)
router.put("/:O_ID", payment.update)
router.delete("/:O_ID", payment.delete)
router.delete("/", payment.deleteAll)

module.exports = router