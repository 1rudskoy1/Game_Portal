const {Schema, model} = require('mongoose');
const schema = new Schema({
    name: {type: String},
    email: {type: String},
    password: {type: String},
    image: {type: String},
    games: [{type: Schema.Types.ObjectId, ref: 'Apps'}],
    sex: {type: String, enum: ['male', 'femal', 'other']},
    completedMeetings: Number,
}, {timestamps: true
}
);

module.exports = model('User', schema);