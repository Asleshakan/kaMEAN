const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

const userRouter = require("./routes/UserRoutes");
const investmentsRouter = require("./routes/InvestmentsRoutes");

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API Routes
app.use("/user", userRouter);
app.use("/investments", investmentsRouter);

// Serve static files from the React frontend app
app.use(express.static(path.resolve(__dirname, "../frontend/build")));

// Handle React routing, return all requests to React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build", "index.html"));
});


    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  
