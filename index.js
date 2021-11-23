const express = require('express');
const routerApi = require('./routes');
const { config } = require('./config');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, my express server');
});

routerApi(app);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening at http://localhost:${config.port}`);
});
