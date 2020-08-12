const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    handle: {
        type: String,
        required: true,
        index: {unique: true}
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
    posts: {
        type: Schema.Types.ObjectId,
        references: 'posts'
    },
    comments: {
        type: Schema.Types.ObjectId,
        references: 'comments'
    }
  },
  {
    timestamps: true,
  }
);

module.exports = User = mongoose.model("users", UserSchema);
