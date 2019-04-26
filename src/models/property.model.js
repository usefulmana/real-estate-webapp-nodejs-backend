let mongoose = require('mongoose');

const uri =
  'mongodb+srv://usefulmana:GAtech321@wpcluster-akxff.gcp.mongodb.net/webprogramming?retryWrites=true';

mongoose.connect(uri, () => {
  console.log('Successfully connect to database');
});

let PropertySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true
    },
    price: {
      type: Number
    },
    area: Number,
    numOfBedrooms: Number,
    direction: String,
    address: {
      type: String
    },
    postDate: {
      type: Date,
      default: Date.now()
    }
  },
  { versionKey: false }
);

module.exports = mongoose.model('property', PropertySchema);
