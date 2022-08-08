const user = require('../models/todoModel')
const mongoose = require('mongoose')

function create(req, res, next) {
    let userName = req.body.userName;
    let userMail = req.body.userMail;
    let userComment = req.body.userComment;
    let userInfo = new user({
        userName,
        userMail,
        userComment
    })
    userInfo.save().then((data) => {
        res.send(data)
    })
}

function view(req, res, next) {
    user.find({}).then((data) => {
        res.send(data)
    })
}

function update(req, res, next) {
    user.findByIdAndUpdate(req.params.id, req.body, (err, userInfo) => {
        if (err) {
            return res.status(500).send({
                error: "Update ERROR!"
            })
        };
        res.send({
            success: "Update SUCCESS!"
        });
    })
}

function remove(req, res, next) {
    user.findByIdAndDelete(req.params.id, (err, userInfo) => {
        if (err) {
            return res.status(500).send({
                error: "Delete ERROR!"
            })
        }
        res.send({
            success: 'Delete SUCCESS!'
        })
    })
}

module.exports.create = create
module.exports.view = view
module.exports.update = update
module.exports.remove = remove