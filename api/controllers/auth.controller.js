const User = require("./../models/user.model")
// const bcrypt = require("bcrypt")
var bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv");
const createError = require("../utils/createError");

//next is for error handling
dotenv.config();
const register = async (req, res, next) => {
    try {
        const hash = bcrypt.hashSync(req.body.password, 10)
        const newUser = new User({
            ...req.body,
            password: hash
        })

        await newUser.save();
        res.status(200).send("created")
    }
    catch (err) {
        next(err)
    }
}

const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) return next(createError(404, "User not found"))

        const isCorrect = bcrypt.compareSync(req.body.password, user.password)
        if (!isCorrect) return next(createError(400, "Wrong password or Username"))

        const token = jwt.sign({
            id: user._id,
            isSeller: user.isSeller
        }, process.env.JWT_KEY)

        const { password, ...info } = user._doc
        console.log("success");
        res.cookie("accessToken", token, { httpOnly: true }).status(200).send(info)
    } catch (error) {
        next(createError(500, "Error"))
    }

}

const logout = (req, res) => {
    res.clearCookie("accessToken", {
        sameSite: "none",
        secure: true,

    }).status(200).send("user has been logged out")
}

module.exports = { register, login, logout }


