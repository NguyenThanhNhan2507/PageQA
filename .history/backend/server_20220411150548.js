const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const categoriesRoute = require("./routes/categories");


dotenv.config();


// connect mongoDB
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Kết nối tới database thành công"))
  .catch((err) => {
    console.error(err);
  });

app.use(express.json());

//Routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", categoriesRoute);
// app.use("/api/lists", listRoute);

app.listen(8800, () => {
  console.log("Backend đang chạy");
});
