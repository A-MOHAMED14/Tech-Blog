const router = require("express").Router();
const { User, Blog, Comment } = require("../../models/index.js");

router.post("/", async (req, res) => {
  try {
    const userData = User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (error) {
    res.status(400).json(err);
  }
});

router.post("/comments", async (req, res) => {
  try {
    const { comment, blog_id } = req.body;
    const userComment = await Comment.create({
      comment,
      blog_id,
      user_id: req.session.user_id,
    });

    if (!userComment) {
      res.status(400).json({ message: "Unable to post comment" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userComment.user_id;
      req.session.logged_in = true;

      res.redirect(`/comments?blog_id=${blog_id}`);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/newblog", async (req, res) => {
  try {
    const { blog_title, content } = req.body;

    const blogData = await Blog.create({
      blog_title,
      content,
      user_id: req.session.user_id,
    });

    if (!blogData) {
      res.status(400).json({ message: "Unable to create new record" });
      return;
    }

    res.redirect("/dashboard/yourblogs");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const blogData = await Blog.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!blogData[0]) {
      res.status(404).json({ message: "No blog found with this id!" });
      return;
    }

    res.status(200).json({ message: "Blog updated successfully" });
  } catch (err) {
    res.status(500).json(err);
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

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (error) {
    res.status(400).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
