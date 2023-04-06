const express = require("express");
var cors = require("cors");
const errorHandler = require("./middlewares/errorHandler");
const app = express();

const userroute = require("./routes/userroute");
const postroute = require("./routes/postroute");
const categoryroute = require("./routes/categoriesroute");
const morgan = require("morgan");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, "hello.jpeg");
  },
});
const upload = multer({ storage: storage });
app.post("/api/v1/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use("/api/v1/user", userroute);
app.use("/api/v1/posts", postroute);
app.use("/api/v1/category", categoryroute);
app.use(errorHandler);

module.exports = app;
