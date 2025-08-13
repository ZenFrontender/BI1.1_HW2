const mongoose = require('mongoose');


require('dotenv').config();

// dotenv library help us to read the .env file 
// config method parses its contents into key-value pairs, which are then added to process.env.

const mongouri = process.env.MONGODB

// here process.env already has connection string where MONGODB  is the key and value has the connection string


const initialiseDatabase = async () => {
  if(cached.conn) return cached.conn;
  if(!cached.promise) {
    cached.promise = mongoose.connect(mongouri, {
      bufferCommands: false,
    }).then((mongoose) => {
      console.log("MongoDB Connected Successfully.");
      return mongoose;
    })
    .catch((err) => console.log("Error Connecting Database:", err));
  }
  cached.conn = await cached.promise;
  return cached.conn;
};

module.exports = { initialiseDatabase };