const UserModel = require('../models/user.model');
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const router = express.Router();
const auth = require('../../middleware/auth')

// ADD NEW USER
router.post('/auth', (req, res) => {
  const { email, password } = req.body;

  // Validation
  if (!email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  // Check for existing user
  UserModel.findOne({ email }).then(user => {
    if (!user) return res.status(400).json({ msg: 'User does not exist' });

    // Validate password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (!isMatch)
        return res.status(400).json({ msg: 'Password does not match' });
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

// User's info

router.get('/auth/user', auth, (req,res) => {
  UserModel.findById(req.user.id).select('-password').then(user => res.json(user))
})

module.exports = router;
