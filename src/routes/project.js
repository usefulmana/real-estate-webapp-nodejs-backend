const ProjectModel = require('../models/project.model');

const express = require('express');

const router = express.Router();

const auth = require('../../middleware/auth')

// ADD NEW PROJECT
router.post('/project', auth,(req, res) => {
  if (!req.body) {
    return res.status(400).send('Bad request! Body is missing');
  }
  let model = new ProjectModel(req.body);
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

// GET ALL PROJECTS
router.get('/project', (req, res) => {
  ProjectModel.find({}, (err, properties) => {
    if (err) {
      res.send('Something is wrong');
    }
    res.json(properties);
  });
});

// GET PROJECT BY ID
router.get('/project/byId/:id', (req, res) => {
  ProjectModel.findById({ _id: req.params.id }, (err, properties) => {
    if (err) {
      res.send('Something is wrong');
    }
    res.json(properties);
  });
});

// GET PROJECTS BY NAME
router.get('/project/byName/:name', (req, res) => {
  ProjectModel.find(
    { name: { $regex: req.params.name, $options: 'i' } },
    (err, properties) => {
      if (err) {
        res.send('Something is wrong');
      }
      res.json(properties);
    }
  );
});

// DELETE A PROPERTY by ID
router.delete('/project/:id', auth,(req, res) => {
  ProjectModel.findByIdAndDelete({ _id: req.params.id }, (err, properties) => {
    if (err) {
      res.send('Something is wrong');
    }
    res.json(properties);
  });
});

// UPDATE A PROJECT
router.put('/project/:id', auth,(req, res) => {
  ProjectModel.findByIdAndUpdate(
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
