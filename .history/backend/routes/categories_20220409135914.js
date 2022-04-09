const router = require("express").Router();
const categories = require("../controllers/categoriesController")
router.delete("/XoaPhim", movie.xoaPhim);

router.post("/ThemCategories", categories.themCategories)

module.exports = router;
