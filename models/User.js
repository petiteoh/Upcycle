const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    handle: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        index: {unique: true}
    },
    password: {
        type: String,
        required: true,
    },
    hero_points: {
        type: Number,
        required: true,
        default: 0
    },
  },
  {
    timestamps: true,
  }
);

module.exports = User = mongoose.model("users", UserSchema);
