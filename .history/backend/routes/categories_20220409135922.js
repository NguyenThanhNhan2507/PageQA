const router = require("express").Router();
const categories = require("../controllers/categoriesController")


router.post("/ThemCategories", categories.themCategories)

module.exports = router;
