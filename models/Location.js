const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LocationSchema = new Schema({
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

module.export = Location = mongoose.model('locations', LocationSchema);