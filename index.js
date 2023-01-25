const express = require('express');
const connect = require('./database/db');
require('dotenv').config();
const bodyParser = require('body-parser');
const router = require('./routes/index');


const port = process.env.PORT || 8000
const app = express();
app.use(bodyParser.json())
app.use(router)

connect().then(() => {
 app.listen(port, console.log(`Server running at http://localhost:${port}`))
})