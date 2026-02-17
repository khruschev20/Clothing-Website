const express = require('express');
const router = express.Router();
const pool = require('../models/db'); // PG example

router.get('/products', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products');
    res.json(result.rows); // For PG; use result for MySQL
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;