const router = require("express").Router();
const categories = require("../controllers/categoriesController")


router.post("/ThemCategories", categories.themCategories)
router.put("/:id", categories.suaCategories)

module.exports = router;
