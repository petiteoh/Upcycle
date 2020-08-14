const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const validateRegisterInput = require ('../../validation/register');
const validateLoginInput = require('../../validation/login');


router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));


router.get(
    "/current",
    passport.authenticate("jwt", {session: false}),
    (req, res) => {
        res.json({
          id: req.user.id,
          handle: req.user.handle,
          email: req.user.email,
          hero_points: req.user.hero_points
        });
})


router.post('/register', (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body)

    if(!isValid) {
        return res.status(400).json(errors);
    }



    // User.findOne({ handle: req.body.handle })
    //     .then(user => {
    //         if (user) { 
    //             return res.status(400).json({
    //                 handle: "Handle already in use!"
    //             })
    //         })
        
        

    User.findOne({email: req.body.email, handle: req.body.handle })
        .then(user => {
            if (user) {
                return res.status(400).json({
                    email: "Email already in use!",
                    handle: "Handle already in use!"
            })
        }   else {
            const newUser = new User({
                handle: req.body.handle,
                email: req.body.email,
                password: req.body.password,
                password2: req.body.password2
            })

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(res.json({
                          id: newUser.id,
                          handle: newUser.handle,
                          email: newUser.email
                        }))
                        .catch(err => console.log(err)) 
                })
            })
        }
    })
})


router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if(!isValid) { 
      return res.status(400).json(errors)
  }

  const email = req.body.email;
  const password = req.body.password;
  


  User.findOne({ email }).then((user) => {
    if (!user) {
      return res.status(404).json({ email: "This user does not exist" });
    }

    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        const payload = { id: user.id, handle: user.handle, hero_points: user.hero_points, photo: user.photo };

        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
              user: payload
            });
          }
        );
      } else {
        return res.status(400).json({ password: "Incorrect password" });
      }
    });
  });
});

router.get("/leaderboard", (req, res) => {
    User.find()
      .sort({ hero_points: -1})
      .limit(5)
      .then(users => {
        const payload = users.map(user => {
          const { hero_points, _id, handle, badge_ids, photo} = user;
          return {
            _id,
            handle,
            hero_points,
            badge_ids,
            photo
          };
        });
        res.json(payload)
      })
      .catch(err => {
        res.status(404).json({ noleaderboardinfo: "No leaderboard info found"})
      })
});

router.get("/:id", (req, res) => {
  User.findById(req.params.id)
    .then(user => res.json({ 
      id: user.id, 
      handle: user.handle, 
      email: user.email,
      badge_ids: user.badge_ids,
      posts: user.posts,
      upcycled_posts: user.upcycled_posts
    }))
    .catch(err => {
        res.status(404).json({ nouserfound: "User does not exist."})
    });
});

module.exports = router;
