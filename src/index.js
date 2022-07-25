const express = require('express');
const morgan  = require('morgan');
const sass = require('node-sass');
const path = require('path');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

// HTTP Logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));

// Home page
app.get(`'/' || '/home'`, (req, res) => {
  res.render('home')
})

// News page
app.get('/news', (req, res) => {
  res.render('news')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})