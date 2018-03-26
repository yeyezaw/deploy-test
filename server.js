const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT || 4000;

app.set('view engine', 'hbs');

app.get('/', (req,res) => {
  res.render('home.hbs', {
    title: 'Home Page',
    headingText: 'Welcome World !',
    paraText: 'This is testing to deploy from github to heroku'
  });
});

app.listen(port, () => {
  console.log('server is running on port : ' + port);
});
