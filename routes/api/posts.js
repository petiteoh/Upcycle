const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require("passport");
const Post = require("../../models/Post");
const User = require("../../models/User");
const Category = require('../../models/Category');
const Upcycle = require('../../models/Upcycle');


router.get('/', (req, res) => {
    // debugger
    Post.find()
    // Post.all()
        .sort({ date: -1 })
        .then(posts => res.json(posts))
        .catch(err => {
            res.status(404).json({ nopostsfound: 'No posts found' })});
});


router.get('/user/:creator_id', (req, res) => {
    Post.find({ creator: req.params.creator_id })
        .sort({ date: -1 })
        .then(posts => res.json(posts))
        .catch(err =>
            res.status(404).json({ nopostsfound: 'This user have not posted anything yet.' }
            )
        );
});


router.get('/:id', (req, res) => {
    Post.findById(req.params.id)
        .then(post => res.json(post))
        .catch(err =>
            res.status(404).json({ nopostfound: 'No post found with that ID' })
        );
});


router.post('/create-post',
    passport.authenticate("jwt", {session: false}),
    (req, res) => {
        const newPost = new Post(req.body);
        newPost
          .save()
          .then((post) => {
            return res.json(post);
        })
        .catch((err) =>
        res.status(404).json({ nopostfound: "Post cannot be saved" })
        );
        
        User.findByIdAndUpdate(req.body.creator_id, {
          $inc: { hero_points: 5 } ,
        }).then((user) => {
          user.save();
        });

    }
);


router.post('/delete', (req, res) => {
    Post.findByIdAndRemove(req.params.id)
        .then(post => {
            if (!post) {
                return res.status(404).send({
                    message: `Post with id ${req.params.id} not found`
                });
            }
            return res.send({ message: 'Post deleted' });
        })
    }
);


router.get("/:id/upcycles", (req, res) => {
    Upcycle.find({post_id: req.params.id})
        .sort({date: -1})
        .then(upcycles => res.json(upcycles))
        .catch(err => res.status(404).json({ nopostUpcycles: "There are no upcycles for this post"}))
});


router.post("/:id/create-upcycle", 
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
  debugger
  const upcycle = new Upcycle({
    post_id: req.params.id,
    upcycler: req.user.id
  });
  upcycle
    .save()
    .then((upcycle) => res.json(upcycle))
    .catch((err) =>
      res.status(404).json({ noupcycle: "Upcycle was not created" })
    );

    // const post = Post.findOne({_id: req.params.id})
    //   .then(post => res.json(post.creator_id))
      
    // console.log(post)

});

module.exports = router;
