const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const data = require('./data');

const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/api/news', (req, res) => {
  const articles = data.articles;
  const props = ['body', 'author', 'title'];
  const articleList = articles.map((article) => {
    return Object.keys(article).reduce((object, key) => {
      if (!props.includes(key)) {
        object[key] = article[key];
      }
      return object;
    }, {});
  });

  return res.status(200).json(articleList);
});

app.get('/api/news/:id', (req, res) => {
  const id = +req.params.id;
  const articles = data.articles;
  const article = articles.filter((article) => article.id === id);
  if (article.length === 0) {
    return res.status(404).json('Article not found');
  }
  return res.status(200).json(article);
});

app.listen(port, () =>
  console.log(`==
Available endpoints:
 * GET '/api/news'
 * GET '/api/news:id'
==

Server is up on port ${port} 🚀`)
);
