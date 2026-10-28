const express = require('express');
const cors = require('cors');

const app = express();

const router = require('./Router/index');

// CORS
app.use(cors());

// JSON data
app.use(express.json());

// EJS
app.set('view engine', 'ejs');

// Routes
app.use('/', router);

// Home
app.get('/', (req, res) => {
    res.send('Backend API is running');
});

// Server
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});