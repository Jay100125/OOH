const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const userRoute = require("./routes/user.route");
const gigRoute = require("./routes/gig.route");
const messageRoute = require("./routes/message.route");
const orderRoute = require("./routes/order.route");
const conversationRoute = require("./routes/conversation.route");
const reviewRoute = require("./routes/review.route");
const authRoute = require("./routes/auth.route");
const cookieParser = require("cookie-parser");
const cors = require("cors");
// mongoose.set('strictQuery', true)
dotenv.config();
try {
  mongoose.connect(process.env.MONGO);
  console.log("connected");
} catch (error) {
  console.log(error);
}

app.use(express.json());
app.use(cookieParser());
// app.use(cors({origin:"https://localhost:5173", credentials:true}))

app.use(
  cors({
    origin: "http://localhost:5173", // Update this with your frontend's origin
    credentials: true,
  })
);
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/ads", gigRoute);
app.use("/api/reviews", reviewRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/orders", orderRoute);
app.use("/api/messages", messageRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";

  return res.status(errorStatus).send(errorMessage);
});

// This is your test secret API key.
const stripe = require('stripe')('sk_test_51OckA4SHsFY4Plwpoc08CuOfcrUNNMguwkA4Z4ASE03ZbRprQ3qkYJtFNtbaeYmiVfyZ0nhqDeCbwUtCe1q66eRW00DAxBp1Pm');
const express = require('express');
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:5173';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: '{{PRICE_ID}}',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.redirect(303, session.url);
});


app.listen(8800, () => {
  console.log("Back-end server is running");
});
