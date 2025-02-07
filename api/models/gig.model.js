const mongoose = require("mongoose");
const { Schema } = mongoose;

const GigSchema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    // desc: {
    //     type: String,
    //     required: true,
    // },
    // totalStars: {
    //     type: Number,
    //     default: 0,
    // },
    // star: {
    //     type: Number,
    //     default: 0,
    // },
    cat: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    // cover: {
    //     type: String,
    //     required: true,
    // },
    images: {
        type: [String],
        required: false,
    },
    // shortTitle: {
    //     type: String,
    //     required: true,
    // },
    shortDesc: {
        type: String,
        required: true,
    },
    audiance: {
        type: String,
        required: false,
    },
    duration: {
        type: Number,
        required: true,
    },
    size: {
        type: Number,
        required: true,
    },
    // revisionNumber: {
    //     type: Number,
    //     required: true,
    // },
    // features: {
    //     type: [String],
    //     required: false,
    // },
    price: {
        type: Number,
        default: 0,
    },
}, { timestamps: true })


module.exports = mongoose.model("Gig", GigSchema)