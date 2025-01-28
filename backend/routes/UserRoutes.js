const express = require("express");
const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.status(200).json({ message: "User API working!" });
});

module.exports = userRouter;
