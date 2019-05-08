const UserModel = require('../models/user.model');
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const router = express.Router();
const auth = require('../../middleware/auth');
// ADD NEW USER
router.post('/user', (req, res) => {
  const { name, email, password, phone } = req.body;
  var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var phoneRegex = /^\d{10}$/;
  // Validation
  if (!name || !email || !password || !phone) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }
  if (!email.match(emailRegex))
    return res.status(400).json({ msg: 'Please enter a valid email address' });
  if (!phone.match(phoneRegex))
    return res.status(400).json({
      msg: 'Please enter a valid phone number! 10 consecutive numbers only!'
    });
  // Check for existing user
  UserModel.findOne({ email }).then(user => {
    if (user)
      return res
        .status(400)
        .json({ msg: 'This email address is already used' });

    const newUser = new UserModel({
      name,
      email,
      password,
      phone
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
router.put('/user/:id', auth, (req, res) => {
  const { name, email, password, phone } = req.body;
  // Validation
  if (!name || !email || !phone) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }
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
  // bcrypt.hash(req.body.password, 10, (err, hash) => {
  //   if (err) throw err;
  //   req.body.password = hash;
  // });
});

module.exports = router;
