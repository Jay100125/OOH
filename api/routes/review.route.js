const express = require("express")
const verifyToken = require("../middleware/jwt")
const { createReview, getReviews, deleteReview } = require("../controllers/review.controller")

const router = express.Router()

// router.post("/", verifyToken, createReview)
router.post("/", createReview)
router.get("/:gigId", getReviews)
router.delete("/:id", deleteReview)



module.exports = router