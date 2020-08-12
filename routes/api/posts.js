const express = require('express');
const router = express.Router();
const Post = require("../../models/Post");

router.get('/', (req, res) => {
    Post.find()
        .sort({ date: -1 })
        .then(posts => res.json(posts))
        .catch(err => {
            // debugger
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

// router.post('/',
router.post('/create-post',
    (req, res) => {
        debugger
        // const newPost = new Post({
        //     // creator_id: req.body.id,
        //     creator_id: req.body.creator_id,
        //     image: req.body.image,
        //     title: req.body.title,
        //     description: req.body.description,
        //     // category_id: req.body.category_id,
        //     // material_ids: req.body.material_id,
        //     // location_id: req.body.lacation_id
        // });
        const newPost = new Post(req.body);
debugger
        // newPost.save().then(post => res.json(post));
        newPost
          .save()
          .then((post) => {
            // console.log(res.json(post))
            return res.json(post);
          })
          .catch((err) =>
            res.status(404).json({ nopostfound: "Post cannot be saved" })
          );
        
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

module.exports = router;
