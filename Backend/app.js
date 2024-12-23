const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const connectTodb = require('./db/db');
const userRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes');


const app = express();

// Connect to MongoDB
connectTodb();

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));

// Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.use('/users', userRoutes);
app.use('/captains', captainRoutes);

module.exports = app;
