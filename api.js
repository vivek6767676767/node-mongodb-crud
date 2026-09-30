const express = require('express');
const cors=require('cors')
const app = express();
app.set('view engine', 'ejs');
app.use(cors())
app.use(express.json());

const router = require('./Router');

app.use('/', router);

app.listen(3001, () => {
    console.log('Server running on http://localhost:3001');
});