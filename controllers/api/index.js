const router = require("express").Router();
const UserRoutes = require("./userRoutes.js");

router.use("/users", UserRoutes);

module.exports = router;
