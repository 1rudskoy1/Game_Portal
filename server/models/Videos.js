const {Schema, model} = require('mongoose');
const schema = new Schema({
    title: {
        type: String,
        required: true
    },
    img_path: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    action: {
        type: String,
        required: true
    },
},{
    timestamps: true
}
);

module.exports = model('Videos', schema);