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
  suaCategories: async () =>{
    
  }
};



module.exports = categoriesCtrl;
