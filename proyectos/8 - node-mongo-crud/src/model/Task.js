const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title: String,
    description : String,
    done : {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Tasks', taskSchema);