const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.static('public'));

const port = 3001;

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});