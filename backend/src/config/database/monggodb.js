const mongoose = require('mongoose');

function connectDB() {
  const DB_URI = 'mongodb://127.0.0.1:27017/ecommerce';
  mongoose
    .connect(DB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));
}

module.exports = { connectDB };
