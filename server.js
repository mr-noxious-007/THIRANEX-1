const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

/* TEST ROUTE */

app.get("/", (req, res) => {
    res.send("Backend Running");
});

/* ADD PROJECT ROUTE */

app.post("/add-project", async (req, res) => {

    try {

        console.log(req.body);

        res.json({
            message: "Project Saved Successfully"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Error Saving"
        });

    }

});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});