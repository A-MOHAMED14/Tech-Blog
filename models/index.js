const User = require("./user.js");
const Blog = require("./Blogs.js");

User.hasMany(Blog, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

Blog.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Blog };
