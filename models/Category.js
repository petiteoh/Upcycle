const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    name: {
        type: String,
        // CHANGE need to change schema, so name is required
        required: true
    },
    timeCreated: {
        type: Date,
        default: new Date()
    }
});

module.exports = Category = mongoose.model('categories', CategorySchema);