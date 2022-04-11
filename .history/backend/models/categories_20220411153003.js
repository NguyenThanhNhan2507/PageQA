const mongoose = require("mongoose");

const CategoriesSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      max: 50000,
    },
    img: {
      type: String,
    },
    dateStart: {
      required: true,
      type: Date,
    },
    dateEnd: {
      required: true,
      type: Date,
    },
    categoriesStatus: {
      type: Boolean,
      default: [false],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Categories", CategoriesSchema);



