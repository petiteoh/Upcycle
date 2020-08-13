const mongoose = require("mongoose");
const Schema = mongoose.Schema;

function generateBadges(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}

const UserSchema = new Schema(
  {
    handle: {
      type: String,
      required: true,
      index: { unique: true },
    },
    email: {
      type: String,
      required: true,
      index: { unique: true },
    },
    password: {
      type: String,
      required: true,
    },
    hero_points: {
      type: Number,
      required: true,
      default: 0,
    },
    posts: [{
      type: Schema.Types.ObjectId,
      ref: "posts",
    }],
    comments: {
      type: Schema.Types.ObjectId,
      ref: "comments",
    },
    badge_ids: {
      type: Array,
      default: [generateBadges(1,6), generateBadges(1,6), generateBadges(1,6)],
    },
    upcycle_ids: [
      {
        type: Schema.Types.ObjectId,
        ref: "upcycles",
        required: false,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = User = mongoose.model("users", UserSchema);
