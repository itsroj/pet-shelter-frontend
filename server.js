const express = require("express");
const app = express();
// This is your test secret API key.
const stripe = require("stripe")('sk_test_51REQNAP9hfcJF9kNchThgBzQArMnUq4Nqp0Q4BYfp6yEZJkvWqra8mY4uC4rhuwiHfPVFg0zwnpqg15tmz8BW4YI00b62Nk7JV');

app.use(express.static("public"));
app.use(express.json());

const calculateOrderAmount = (items) => {
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  let total = 0;
  items.forEach((item) => {
    total += item.amount;
  });
  return total;
};

app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "eur",
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});


app.listen(4242, () => console.log("Node server listening on port 4242!"));