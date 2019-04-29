let mongoose = require('mongoose');
let User = require('./user.model');
let config = require('config')

const uri = config.get('uri')

mongoose.connect(uri, () => {
  console.log('Successfully connect to database');
});

let ProjectSchema = new mongoose.Schema(
  {
    name: {
      require: true,
      type: String
    },
    owner: {
      type: String,
      require: true
    },
    type: {
      type: String
    },
    totalArea: {
      type: Number
    },
    startYear: {
      type: String
    },
    endYear: {
      type: String
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  },
  { versionKey: false }
);

module.exports = mongoose.model('project', ProjectSchema);
