const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;

app.get('/api', (req, res) => {
  res.send('Hello, my express server');
});


app.get('/new-route', (req, res) => {
  res.send('Hello, Im a new endpoint');
});

routerApi(app);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening at http://localhost:${port}`);
});
