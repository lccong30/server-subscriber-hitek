const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var subscribeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  note: {
    type: String,
  },
});

//Export the model
module.exports = mongoose.model("Subscribe", subscribeSchema);
