const express = require("express");
const router = express.Router();
const Category = require('../../models/Category');
const Post = require("../../models/Post");

router.get("/", (req, res) => {
  Category.find()
    .sort({ name: 1 })
    .then((categories) => res.json(categories))
    .catch((err) =>
      res.status(404).json({ nocategoriesfound: "No categories found" })
    );
});

router.get("/:category_id", (req, res) => {
    Post.find({ category_id: req.params.category_id })
        .then(posts => res.json(posts))
        .catch(err =>
            res.status(404).json({ nopostsfound: "There are no posts in this category"}))
});



module.exports = router;