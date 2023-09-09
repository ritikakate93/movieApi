const mongoose = require('mongoose');

const connectDB =  () => {
    try {
       mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
  
      console.log('MongoDB Connected...');
    } catch (err) {
      console.error(err.message);
    }
  };
  
  module.exports = connectDB;
