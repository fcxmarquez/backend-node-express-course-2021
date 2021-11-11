const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, my express server');
});

app.get('/new-route', (req, res) => {
  res.send('Hello, Im a new endpoint');
});

app.get('/products', (req, res) => {
  res.json([
    {
      name: 'Milk',
      price: 1000
    },
    {
      name: 'Sauce',
      price: 500
    }
  ]);
});

app.get('/products/:id', (req, res) => {
  res.json({
    name: 'Milk',
    price: 1000
  });
})

app.listen(port, () => {
  console.log('My port ' + port);
});

