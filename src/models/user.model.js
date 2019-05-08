const mongoose = require('mongoose');
const config = require('config');

const uri = config.get('uri');
mongoose.connect(uri, { useNewUrlParser: true },() => {
  console.log('Successfully connect to database');
});

const UserSchema = mongoose.Schema(
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
    phone: {
      type: String
    },
    avatar: {
      type: String,
      default: 'https://avatars2.githubusercontent.com/u/464297?s=460&v=4'
    },
    registerDate: {
      type: Date,
      default: Date.now()
    }
  },
  { versionKey: false }
);

module.exports = mongoose.model('user', UserSchema);
