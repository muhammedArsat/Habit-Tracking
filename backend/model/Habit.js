const mongoose = require('mongoose');

const habitScheme = new mongoose.Schema({
    name:{
        type:"String",
        require:"true"
    },
    days:{
        type:[mongoose.Schema.Types.Mixed],
        default:Array(21).fill(null)
    }
});

module.exports = mongoose.model('Habit', habitScheme);