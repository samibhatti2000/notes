const mongoose = require("mongoose");

const nftHolderSchema = new mongoose.Schema({
  pubkey: {
    type: String,
    unique: true,
    require: [true, "please enter address"],
    maxLength: [42, "please enter correct 42 character address also with 0x"],
    minLength: [42, "please enter correct 42 character address also with 0x"],
  },
  location: {
    type: String,
    require: [true, "please enter location"],
  },
});

module.exports = mongoose.model("nftholder", nftHolderSchema);
