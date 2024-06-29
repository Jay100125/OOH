const express = require("express")
const { getOrders, intent ,confirm} = require("../controllers/order.controller")
const verifyToken = require("../middleware/jwt")

const router = express.Router()

// router.post("/:gigId", verifyToken, createOrder)
router.get("/", verifyToken, getOrders)
router.post("/create-payment-intent/:id", verifyToken, intent);
router.put("/", verifyToken, confirm);

// router.get("/", getOrders)
// router.post("/create-payment-intent/:id", intent);
// router.put("/", confirm);


module.exports = router