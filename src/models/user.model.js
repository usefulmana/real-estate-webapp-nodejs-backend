const mongoose = require('mongoose');
let config = require('config');

const uri = config.get('uri');
mongoose.connect(uri, () => {
  console.log('Successfully connect to database');
});

let UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true
    },
    email: {
      type: String,
      unique: true,
      require: true
    },
    password: {
      type: String,
      require: true
    },
    registerDate: {
      type: Date,
      default: Date.now()
    }
  },
  { versionKey: false }
);

module.exports = mongoose.model('user', UserSchema);
