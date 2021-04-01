// Import packages
const express = require("express");
// const cors = require("cors");
const app = express();
const path = require("path");

// Server
const PORT = process.env.PORT || 3000;

// Middleware
// app.use(cors);

// serve static files
app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static("public"));

app.get("/", (req, res) => {
    console.log("Request inside get method");
    res.status(200).sendFile("index.html");
});

app.listen(PORT, () => {
    console.log(`Server up @ http://localhost:${PORT}`);
});
