// importing mongoose for connection with mongoDB
const mongoose = require("mongoose");

// This is the data schema
const UserSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  surname: {
    required: true,
    type: String,
  },
  position: {
    required: true,
    type: String,
  },
  adrress: {
    required: true,
    type: String,
  },
  city: {
    required: true,
    type: String,
  },
  state: {
    required: true,
    type: String,
  },
  country: {
    required: true,
    type: String,
  },
  image: {
    required: true,
    type: String,
  },
  phone: {
    required: true,
    type: String,
  },
  about: {
    required: true,
    type: String,
  },
});

// exporting the schema
module.exports = mongoose.model("User", UserSchema);