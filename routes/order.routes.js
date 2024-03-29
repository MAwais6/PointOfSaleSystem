const express = require("express")
const router = express.Router()
const order = require("../controller/order.controller")

router.post("/", order.create)
router.get("/", order.findAll)
router.get("/:O_ID", order.findOne)
router.put("/:O_ID", order.update)
router.delete("/:O_ID", order.delete)
router.delete("/", order.deleteAll)

module.exports = router
