const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');


const route = require('./routes/index');
const { connectDB } = require('./config/database/monggodb');

connectDB();
dotenv.config();
const PORT = process.env.PORT || 5000;


const app = express();


app.use(cors());
route(app);

app.listen(PORT, () => {
    console.log('Server is running on http://localhost:' + PORT);
})

