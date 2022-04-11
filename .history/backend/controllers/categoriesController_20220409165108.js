const Categories = require("../models/categories");


const categoriesCtrl = {
  themCategories: async (req, res) => {
    const newCategories = new Categories(req.body)
    try {
      const saveCategories = await newCategories.save()
      res.status(200).json(saveCategories)
    } catch (err) {
      res.status(500).json(err)
    }
  },
  suaCategories: async (req, res) =>{

      try {
        const categories = await Categories.findById(req.params.id)
        if(categories.userId === req.body.userId){
          await categories.updateOne({$set:req.body})
          res.status(200).json("Danh mục đã được cập nhật")
        }else{
          res.status(403).json("Bạn không thể cập nhật danh mục")
        }
      } catch (err) {
        res.status(500).json(err)
      }
  },
};



module.exports = categoriesCtrl;
