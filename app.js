const express = require('express');
const ejs = require('ejs');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

const port = 3000;
app.listen(port, () => {
  console.log(`App started at ${port}`);
});
