const express = require('express');
const serverless = require('serverless-http');
const path = require('path');

const app = express();
const port = 3500;

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    'path': 'Home',
    'name': 'Monica Bui'
  })
});

app.use(express.json());
app.use('/static', express.static(path.join(__dirname, '/../client/dist')));
app.use('/', express.static(path.join(__dirname, '..', 'public')));
app.use('/*', express.static(path.join(__dirname, '..', 'public')));
app.use('/.netlify/functions/api', router);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})

module.exports.handler = serverless(app);