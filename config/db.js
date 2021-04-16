const mongoose = require('mongoose');
const newbase = require('./keys').mongoURI;


const db = async () => {
    try {
      await mongoose.connect(newbase, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      });
  
      console.log('MongoDB Connection established...');
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  };

  module.exports = db;