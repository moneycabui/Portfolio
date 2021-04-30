const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const port = 3500;

app.use(express.json());
app.use('/static', express.static(path.join(__dirname, '/../client/dist')));
app.use('/', express.static(path.join(__dirname, '..', 'public')));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})