const mongoose = require("mongoose");
const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provide Category"],
  },
});

module.exports = mongoose.model("Category", CategorySchema);
