require('dotenv').config();

const { MongoClient } = require('mongodb');

const url = process.env.MONGO_URL;

const client = new MongoClient(url);

const dbName = "sample_mflix";

let db;

const connectDB = async () => {
    try {
        await client.connect();

        console.log("MongoDB connected successfully");

        db = client.db(dbName);

        return db;

    } catch (error) {
        console.log("MongoDB connection failed");
        console.log(error);
    }
};

module.exports = {
    connectDB
};