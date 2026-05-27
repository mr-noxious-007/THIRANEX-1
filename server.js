require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

/* MIDDLEWARE */

app.use(cors());
app.use(express.json());

/* MONGODB CONNECTION */

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("MongoDB Connected Successfully");
})
.catch((error) => {
    console.log("MongoDB Connection Error:", error);
});

/* TEST ROUTE */

app.get("/", (req, res) => {
    res.send("Backend Running Successfully");
});

/* ADD PROJECT ROUTE */

app.post("/add-project", async (req, res) => {

    try {

        console.log("Received Data:", req.body);

        res.status(200).json({
            success: true,
            message: "Project Saved Successfully"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "Error Saving Project"
        });

    }

});

/* SERVER */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});