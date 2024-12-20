const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const connectTodb = require('./db/db');

const app = express();

// Connect to MongoDB
connectTodb();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

module.exports = app;
