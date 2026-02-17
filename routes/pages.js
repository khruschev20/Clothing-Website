const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home', { 
    title: 'Home | Clothing Store',
    activePage: 'home'
  });
});

router.get('/category', (req, res) => {
  res.render('category', { 
    title: 'All Categories',
    activePage: 'category'
  });
});

router.get('/kids', (req, res) => {
  res.render('kids', { 
    title: 'Kids Clothing',
    activePage: 'kids'
  });
});

router.get('/men', (req, res) => {
  res.render('men', { 
    title: 'Men’s Clothing',
    activePage: 'men'
  });
});

router.get('/women', (req, res) => {
  res.render('women', { 
    title: 'Women’s Clothing',
    activePage: 'women'
  });
});

router.get('/login', (req, res) => {
  res.render('login', { 
    title: 'Login',
    activePage: 'login'
  });
});

router.get('/signup', (req, res) => {
  res.render('signup', { 
    title: 'Sign Up',
    activePage: 'signup'
  });
});

router.get('/cart', (req, res) => {
  res.render('cart', { 
    title: 'Your Cart',
    activePage: 'cart'
  });
});

// Optional 404 fallback (can be moved to app.js)
router.use((req, res) => {
  res.status(404).render('error', { 
    title: 'Page Not Found',
    message: 'The page you requested could not be found.'
  });
});

module.exports = router;