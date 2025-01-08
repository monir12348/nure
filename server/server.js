const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/orders");

// Schema and Model
const orderSchema = new mongoose.Schema({
  name: String,
  address: String,
  phone: String,
  order: String,
  createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.model("Order", orderSchema);

// POST Route to Save Order
app.post("/orders", async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.status(201).json({ message: "Order saved successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to save order" });
  }
});

// GET Route to Fetch Orders (for the owner)
app.get("/orders", async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});


//delete

app.delete('/delete' ,async(req,res)=>{
  await Order.deleteMany()
  res.status(200).json({ message: "All data are deleted!" });
})

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
