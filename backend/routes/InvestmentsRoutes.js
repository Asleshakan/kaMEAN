const express = require("express");
const investmentsRouter = express.Router();

investmentsRouter.get("/", (req, res) => {
  res.status(200).json({ message: "Investments API working!" });
});

module.exports = investmentsRouter;
