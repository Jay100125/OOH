const express = require("express")
const verifyToken = require("../middleware/jwt")
const { getConversations, createConversations, getSingleConversation, updateConversations } = require("../controllers/conversation.controller")

const router = express.Router()

// router.get("/", verifyToken, getConversations)
// router.post("/", verifyToken, createConversations)
// router.get("/single/:id", verifyToken, getSingleConversation)
// router.put("/:id", verifyToken, updateConversations)

router.get("/", getConversations)
router.post("/", createConversations)
router.get("/single/:id", getSingleConversation)
router.put("/:id", updateConversations)

module.exports = router