const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// 1. Connection to MongoDB Atlas
mongoose.connect("mongodb://rajasekharwiz_db_user:AGGAEGk1yeoFIj5O@ac-h4tcotu-shard-00-00.tcezcxn.mongodb.net:27017,ac-h4tcotu-shard-00-01.tcezcxn.mongodb.net:27017,ac-h4tcotu-shard-00-02.tcezcxn.mongodb.net:27017/mydb?ssl=true&replicaSet=atlas-a0isqs-shard-0&authSource=admin&retryWrites=true&w=majority")
    .then(() => console.log("✅ MongoDB Connected"))
    .catch(err => console.log("❌ Mongo Connection Error:", err));

// 2. Define the Schema
const ContactSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String
});

const Contact = mongoose.model("Contact", ContactSchema);

// 3. The "POST" Route
app.post("/api/contact", async (req, res) => {
    console.log("--- New Request Received ---");
    console.log("Data from Frontend:", req.body);

    try {
        const newContact = new Contact(req.body);
        await newContact.save();

        console.log("✅ Successfully saved to MongoDB!");
        res.status(200).json({ message: "Success! Data saved." });
    } catch (err) {
        console.error("❌ MongoDB Save Error:", err);
        res.status(500).json({ error: "Failed to save data" });
    }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));