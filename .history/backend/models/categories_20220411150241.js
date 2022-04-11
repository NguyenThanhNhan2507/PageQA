// const mongoose = require("mongoose");

// const CategoriesSchema = new mongoose.Schema(
//   {
//     userId: {
//       type: String,
//       required: true,
//     },
//     content: {
//       type: String,
//       max: 50000,
//     },
//     img: {
//       type: String,
//     },
//     dateStart: {
//       required: true,
//       type: Date,
//     },
//     dateEnd: {
//       required: true,
//       type: Date,
//     },
//     categoriesStatus: {
//       type: Boolean,
//       default: [false],
//     },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Categories", CategoriesSchema);



const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String },
    img: { type: String },
    imgTitle: { type: String },
    imgSm: { type: String },
    trailer: { type: String },
    video: { type: String },
    year: { type: String },
    limit: { type: Number },
    genre: { type: String },
    isSeries: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movie", MovieSchema);
