const User = require("./user.js");
const Blog = require("./Blogs.js");
const Comment = require("./comment.js");

User.hasMany(Blog, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

Blog.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Blog, Comment };
