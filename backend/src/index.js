const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const demoRouteIndex = require("./routes/demo/index");

const server = express();
const PORT = process.env.PORT || 5000;

// Middleware
server.use(bodyParser.json());
server.use(cors({ origin: "*" }));

// Routes
server.use("/demo", demoRouteIndex);

server.listen(PORT, () => console.log("Server is running on port: " + PORT));
