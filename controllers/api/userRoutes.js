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

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    res.json({ user: userData, message: "You are now logged in!" });
  } catch (error) {
    res.status(400).json(err);
  }
});
