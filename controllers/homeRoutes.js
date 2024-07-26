const router = require("express").Router();
const { User, Blog } = require("../models");
const withauth = require("../utils/auth.js");

router.get("/", async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    res.render("homepage", { blogs, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/blog/:id", async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const blog = blogData.get({ plain: true });

    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/dashboard", withauth, async (req, res) => {
  try {
    res.render("dashboard", { logged_in: true, current_path: "/dashboard" });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/comments", async (req, res) => {
  try {
    const blogId = req.query.blog_id;
    const blogData = await Blog.findByPk(blogId, {
      include: [{ model: User, attributes: ["name"] }],
    });

    res.render("comments", { blog: blogData.get({ plain: true }) });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }

  res.render("signup");
});

module.exports = router;
