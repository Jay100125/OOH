const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
    gigId: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false,
    },
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    // sellerId: {
    //     type: String,
    //     required: true,
    // },
    // buyerId: {
    //     type: String,
    //     required: true,
    // },
    isCompleted: {
        type: Boolean,
        default: false,
    },
    payment_intent: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
})
module.exports =  mongoose.model("Order", orderSchema)