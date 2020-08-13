const mongoose = require("mongoose");
const Schema = mongoose.Schema;


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
    posts: {
      type: Schema.Types.ObjectId,
      references: "posts",
    },
    comments: {
      type: Schema.Types.ObjectId,
      references: "comments",
    },
    badge_ids: {
      type: Array,
      default: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
    upcycle_ids: [
      {
        type: Schema.Types.ObjectId,
        references: "upcycles",
        required: false,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = User = mongoose.model("users", UserSchema);
