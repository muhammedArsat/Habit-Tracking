const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/dbConfig');
const habitRoutes = require('./routes/HabitRoutes');
const cors =  require('cors')
const app = express();
const port = 3000;

dotenv.config();
app.use(express.json());
app.use(cors())
connectDB();

app.use('/api/v1', habitRoutes);
app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${process.env.PORT}`)
);
