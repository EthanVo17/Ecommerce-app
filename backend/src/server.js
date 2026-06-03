const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const route = require('./routes/index');
const { connectDB } = require('./config/database/monggodb');

connectDB();
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
route(app);

app.listen(PORT, () => {
  console.log('Server is running on http://localhost:' + PORT);
});
