const mongoose = require('mongoose');
const Project = require('./project.model');
const User = require('./user.model');
const config = require('config');

const uri = config.get('uri');
mongoose.connect(uri, () => {
  console.log('Successfully connect to database');
});

const PropertySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true
    },
    price: {
      type: Number,
      require: true
    },
    area: Number,
    numOfBedrooms: Number,
    direction: String,
    address: {
      type: String,
      require: true
    },
    postDate: {
      type: Date,
      default: Date.now()
    },
    endDate: {
      type: Date
    },
    imageURL: [{ type: String }],
    project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  },
  { versionKey: false }
);

module.exports = mongoose.model('property', PropertySchema);
