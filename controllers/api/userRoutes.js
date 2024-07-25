const router = require("express").Router();
const { User } = require("../../models/index.js");

router.post("/", async (req, res) => {
  try {
    const userData = User.create(req.body);

    res.status(200).json(userData);
  } catch (error) {
    res.status(400).json(err);
  }
});
