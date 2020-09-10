const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MaterialSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    timeCreated: {
        type: Date,
        default: new Date()
    }
});

module.exports = Material = mongoose.model('materials', MaterialSchema);