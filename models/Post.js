const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    image: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: Text,
        required: true
    },
    category_id: {
        type: Schema.Types.ObjectId,
        ref: 'categories'
    },
    material_id: [
        {
            type: Schema.Types.ObjectId,
            ref: 'materials'
        }
    ],
    location_id: {
        type: Schema.Types.ObjectId,
        ref: 'locations'
    },
    timeCreated: {
        type: Date,
        default: new Date()
    }
});

module.export = Post = mongoose.model('posts', PostSchema);