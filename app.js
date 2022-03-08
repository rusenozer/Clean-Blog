const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const app = express();
const Post = require('./models/Post');

mongoose.connect('mongodb://localhost/cleanblog-test');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  const posts = await Post.find({});
  res.render('index', {
    posts,
  });
});

app.get('/add', async (req, res) => {
  res.render('add_post');
});

app.post('/add', async (req, res) => {
  const newPost = await Post.create(req.body);
  res.redirect('/');
});

app.get('/posts/:id', async (req, res) => {
  const id = req.params.id;
  const post = await Post.findById({ _id: id });

  res.render('post', {
    post,
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`App started at ${port}`);
});
