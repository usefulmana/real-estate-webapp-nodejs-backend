const mongoose = require('mongoose');
const Project = require('./project.model');
const User = require('./user.model');
const config = require('config');

const uri = config.get('uri');
mongoose.connect(uri, () => {
  console.log('Successfully connect to database');
});

var addDaysToDate = (date, days) => {
  return new Date(date.getTime() + days * 24 * 60 * 60000);
};
var DateFormat = date => {
  var days = date.getDate();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var hours = date.getHours();
  var minutes = date.getMinutes();
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = days + '/' + month + '/' + year + '/ ' + hours + ':' + minutes;
  return strTime;
};
var now = new Date();
var next = addDaysToDate(now, 90);

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
    numOfBathrooms: Number,
    direction: String,
    address: {
      type: String,
      require: true
    },
    city: {
      type: String,
      require: true
    },
    province: {
      type: String
    },
    postDate: {
      type: Date,
      default: now
    },
    endDate: {
      type: Date,
      default: next
    },
    imageURL: [{ type: String }],
    project: { type: mongoose.Schema.Types.ObjectId, ref: 'projects' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'users' }
  },
  { versionKey: false }
);

module.exports = mongoose.model('property', PropertySchema);
