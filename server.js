const express = require("express");
const sequelize = require("sequelize");

const app = express();
const PORT = process.env.PORT || 3001;

sequelize.sync({ force: false }).then(() => {
  app.listen(
    (PORT, () => console.log(`Server is now running on Port ${PORT}...`))
  );
});
