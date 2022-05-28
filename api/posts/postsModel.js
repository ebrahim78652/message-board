const mongoose = require("mongoose");
const { Schema } = mongoose;

const messageSchema = new Schema({
  text: {
    type: String,
  },
});

//important: remember to name model the same as the collection in the database
const message = mongoose.model("messages", messageSchema);
module.exports = message;
