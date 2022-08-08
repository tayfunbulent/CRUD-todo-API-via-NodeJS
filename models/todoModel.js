const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    userMail: {
        type: String,
        required: true
    },
    userComment: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('TodoModel', userSchema)