const mongoose = require('mongoose');

async function connectTodb() {
    try {
        // Attempt to connect to MongoDB
        await mongoose.connect(process.env.DB_CONNECT, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });
        console.log('Connected to DB');
    } catch (error) {
        console.error('Failed to connect to DB:', error.message);
    }
}

module.exports = connectTodb;
