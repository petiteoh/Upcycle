const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    creator_id: {
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
        type: String,
        required: true
    },
    category_id: {
        type: Schema.Types.ObjectId,
        ref: 'categories',
        required: false
    },
    material_ids: [
        {
            type: Schema.Types.ObjectId,
            ref: 'materials',
            required: false
        }
    ],
    location_id: {
        type: Schema.Types.ObjectId,
        ref: 'locations',
        required: false
    },
    upcycle_ids: [
        {
          type: Schema.Types.ObjectId,
          ref: 'upcycles',
          required: false
        }
    ],
    timeCreated: {
        type: Date,
        default: new Date()
    },
});

module.exports = Post = mongoose.model('posts', PostSchema);
