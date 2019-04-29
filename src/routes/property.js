const PropertyModel = require('../models/property.model');

const express = require('express');

const router = express.Router();

const auth = require('../../middleware/auth');

// POST NEW PROPERTY
router.post('/property', (req, res) => {
  if (!req.body) {
    return res.status(400).send('Bad request! Body is missing');
  }
  let model = new PropertyModel(req.body);
  model
    .save()
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(500).send(doc);
      }
      res.status(201).send(doc);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// GET ALL PROPERTIES
router.get('/property', (req, res) => {
  PropertyModel.find({}, (err, properties) => {
    if (err) {
      res.send('Something is wrong');
    }
    res.json(properties);
  });
});

// GET BY ID
router.get('/property/byId/:id', (req, res) => {
  PropertyModel.findById({ _id: req.params.id }, (err, properties) => {
    if (err) {
      res.send('Something is wrong');
    }
    res.json(properties);
  });
});

// GET BY ADDRESS
router.get('/property/byAddress/:address', (req, res) => {
  console.log(req);
  PropertyModel.find(
    { address: { $regex: req.params.address, $options: 'i' } },
    (err, properties) => {
      if (err) {
        res.send('Something is wrong');
      }
      res.json(properties);
    }
  );
});

// DELETE A PROPERTY by ID
router.delete('/property/:id', (req, res) => {
  PropertyModel.findByIdAndDelete({ _id: req.params.id }, (err, properties) => {
    if (err) {
      res.send('Something is wrong');
    }
    res.json(properties);
  });
});

// UPDATE A PROPERTY
router.put('/property/:id', (req, res) => {
  PropertyModel.findByIdAndUpdate(
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
