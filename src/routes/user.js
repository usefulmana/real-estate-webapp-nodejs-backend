let UserModel = require('../models/user.model');
let express = require('express');
let bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken');
let router = express.Router();

// ADD NEW USER
router.post('/user', (req, res) => {
  const {name, email,password} = req.body;

  // Validation
  if(!name || !email || !password){
      return res.status(400).json({msg: "Please enter all fields"})
  }

  // Check for existing user
  UserModel.findOne({email}).then( user =>{
      if(user) return res.status(400).json({msg: "Email address is already used"});

      const newUser = new UserModel({
          name,
          email,
          password
      });

      // Encrypt password before storage
      bcrypt.genSalt(10, ( err,salt)=> {
          bcrypt.hash(newUser.password, salt, (err,hash)=>{
              if(err) throw err;
              newUser.password = hash;
              newUser.save().then(user =>{
                  res.json({
                      user: {
                          id: user.id,
                          name: user.name,
                          email: user.email
                      }
                  })
              })
          })
      })
  })
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

module.exports = router;
