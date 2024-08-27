const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Webhook endpoint
app.post("/webhook", (req, res) => {
  // Extract the payload from the incoming POST request
  const payload = req.body;

  // Process it now or if it is  heavy task , process it later and quickly send the acceptance response
  console.log("Received webhook payload:", payload);

  // Optionally, send a response to the sender to acknowledge receipt
  res.status(200).send("Webhook received successfully");
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
