const createError = require("../utils/createError")
const User = require("./../models/user.model")
const jwt = require("jsonwebtoken")

const deleteUser = async (req, res,next) => {

    const user = await User.findById(req.params.id)

    if (req.userId !== user._id.toString()) {
        return next(createError(300,"You can only delete your account"))
    }

    await User.findByIdAndDelete(req.params.id)
    res.status(200).send("deleted")
}

const getUser = async (req, res,next) => {

    const user = await User.findById(req.params.id)

    res.status(200).send(user)
}



module.exports = {deleteUser, getUser}