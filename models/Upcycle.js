const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UpcycleSchema = new Schema({
  post_id: {
    type: Schema.Types.ObjectId,
    references: 'posts',
    required: false,
  },
  upcycler: {
    type: Schema.Types.ObjectId,
    references: 'users'
  },
  timeCreated: {
    type: Date,
    default: new Date(),
  },
});

module.exports = Upcycle = mongoose.model("upcycles", UpcycleSchema);
