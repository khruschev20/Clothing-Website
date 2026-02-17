const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();

//const port = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
const pagesRouter = require('./routes/pages');
app.use('/', pagesRouter);

// Optional: 404 handler
app.use((req, res) => {
  res.status(404).render('error', { 
    title: 'Page Not Found',
    message: 'The page you are looking for does not exist.'
  });
});

/*app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});*/
