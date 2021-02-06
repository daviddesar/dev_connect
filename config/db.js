const mongoose = require('mongoose');
const config = require('config');

const dbLink = config.get("mongoURI");
const connectDB = async () => {
    try {
        await mongoose.connect(dbLink, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("DB connected!")
    }
    catch {
        console.error("Error connection to DB");
        process.exit(1)
    }
} 

module.exports = connectDB;