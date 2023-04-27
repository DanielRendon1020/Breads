const mongoose = require('mongoose');
const { Schema } = mongoose;

const breadSchema = new Schema({
  name: { type: String, required: true },
  hasGluten: Boolean,
  image: { type: String, default: "/images/NIA.jpg" },
});

const Bread = mongoose.model("Bread", breadSchema);

module.exports = Bread;

