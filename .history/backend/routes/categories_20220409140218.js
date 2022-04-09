const router = require("express").Router();
const categories = require("../controllers/categoriesController")


router.post("/ThemCategories", categories.themCategories)
router.put("/SuaCategories", categories.suaCategories)

module.exports = router;
