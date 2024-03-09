const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const stripe = require("stripe")(
  "sk_test_51Orx82SF9C3UyU0xFvPxmVldxTYASRwX2tpaxFfMvoeCPNdEqzlOTDjLx5R6ENxjlAx6bCuPUW4IUcfFYNGtCdV500VVK5QOFp"
);

//  checkout api
app.post("/api/create-checkout-session", async (req, res) => {
  const { products } = req.body;

  const lineItems = products.map((product) => ({
    price_data: {
      currency: "INR",
      product_data: {
        name: product.title,
        images: [product.image],
      },
      unit_amount: Math.round(product.price * 100),
    },
    quantity: product.cartQuantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:5173/success",
    cancel_url: "http://localhost:5173/cancel",
  });

  res.json({ id: session.id });
});

app.listen(7000, () => {
  console.log("sever start");
});
