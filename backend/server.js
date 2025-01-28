const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./routes/UserRoutes");
const investmentsRouter = require("./routes/InvestmentsRoutes");

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/user", userRouter);
app.use("/investments", investmentsRouter);

// Connect to MongoDB
//mongoose
//  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
 
app.listen(port, () => console.log(`Server running on port ${port}`));
