const UserModel = require('../models/user.model');
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const router = express.Router();

// ADD NEW USER
router.post('/user', (req, res) => {
  const { name, email, password, phone } = req.body;

  // Validation
  if (!name || !email || !password || !phone) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  // Check for existing user
  UserModel.findOne({ email }).then(user => {
    if (user)
      return res
        .status(400)
        .json({ msg: 'This email address is already used' });

    const newUser = new UserModel({
      name,
      email,
      password
    });

    // Encrypt password before storage
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then(user => {
          jwt.sign(
            { id: user.id },
            config.get('jwtSecret'),
            { expiresIn: 7200 },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user: {
                  id: user.id,
                  name: user.name,
                  email: user.email
                }
              });
            }
          );
        });
      });
    });
  });
});

//  GET USER BY ID
router.get('/user/:id', (req, res) => {
  UserModel.findById({ _id: req.params.id }, (err, properties) => {
    if (err) {
      res.send('Something is wrong');
    }
    res.json(properties);
  });
});

// UPDATE USER
router.put('/user/:id', (req, res) => {
  const { name, email, password, phone } = req.body;
  // Validation
  if (!name || !email || !password || !phone) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) throw err;
    req.body.password = hash;
    UserModel.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true },
      (err, properties) => {
        if (err) {
          res.send('Something is wrong');
        }
        res.json(properties);
      }
    );
  });
});

module.exports = router;
