const express = require("express")
const router = express.Router()
const subCategory = require("../controller/sub.category.controller")

router.post("/", subCategory.create)
router.get("/", subCategory.findAll)
router.get("/:SubCat_Name", subCategory.findOne)
router.put("/:SubCat_Name", subCategory.update)
router.delete("/:SubCat_Name", subCategory.delete)
router.delete("/", subCategory.deleteAll)

module.exports = router