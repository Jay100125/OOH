const createError = require("../utils/createError");
const Order = require("../models/order.model")
const Gig = require("../models/gig.model")
// const stripe = require("stripe")(process.env.STRIPE);
const Stripe = require("stripe")

const intent = async (req, res, next) => {
  const stripe = new Stripe(process.env.STRIPE);
  const gig = await Gig.findById(req.params.id)
  const paymentIntent = await stripe.paymentIntents.create({
    amount: gig.price * 100,
    currency: "inr",
    description: "for fiver-clone project",
    shipping: {
      name: "Random",
      address: {
        line1: "510 Townsend St",
        postal_code: "98140",
        city: "San Francisco",
        state: "CA",
        country: "US",
      },
    },
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
  });

  const newOrder = new Order({
    gigId: gig._id,
    image: gig.cover,
    title: gig.title,
    buyerId: req.userId,
    sellerId: gig.userId,
    price: gig.price,
    payment_intent: paymentIntent.id,
  })
  await newOrder.save();

  res.status(200).send({
    clientSecret: paymentIntent.client_secret,
  })
}

// const createOrder = async (req, res, next) => {
//     try {
//         const gig = await Gig.findById(req.params.gigId)

//         const newOrder = new Order({
//             gigId: gig._id,
//             image: gig.cover,
//             title: gig.title,
//             buyerId: req.userId,
//             sellerId: gig.userId,
//             price: gig.price,
//             payment_intent: "Temp",
//         })

//         await newOrder.save();
//         res.status(200).send("successful")
//     } catch (error) {
//         next(error)
//     }
// }

const getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({
      ...(req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }),
      isCompleted: true
    })

    res.status(200).send(orders)
  } catch (error) {
    next(error)
  }
}
const confirm = async (req, res, next) => {
  try {
    const orders = await Order.findOneAndUpdate(
      {
        payment_intent: req.body.payment_intent,
      },
      {
        $set: {
          isCompleted: true,
        },
      }
    );

    res.status(200).send("Order has been confirmed.");
  } catch (err) {
    next(err);
  }
};

module.exports = {
  // createOrder,
  getOrders, intent, confirm
}