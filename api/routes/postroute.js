const express = require("express");
const {
  postBlog,
  updateBlog,
  deleteBlog,
  getPostdata,
  getManyPost,
} = require("../controllers/postcontroller");
const router = express.Router();
const isauthenticatd = require("../middlewares/auth");

router.route("/create").post(isauthenticatd, postBlog);
router.route("/update/:id").put(isauthenticatd, updateBlog);
router.route("/delete/:id").delete(isauthenticatd, deleteBlog);
router.route("/:id").get(getPostdata);
router.route("/").get(getManyPost);
module.exports = router;
