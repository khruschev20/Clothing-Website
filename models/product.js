// models/product.js
const db = require('./db');

class Product {
  static async findAll() {
    const query = `
      SELECT 
        p.product_id,
        p.name,
        p.slug,
        p.description,
        p.base_price,
        p.brand,
        p.is_active,
        c.name AS category_name,
        c.slug AS category_slug
      FROM products p
      LEFT JOIN categories c ON p.category_id = c.category_id
      WHERE p.is_active = true
      ORDER BY p.created_at DESC
      LIMIT 12;           -- for homepage "featured"
    `;

    const { rows } = await db.query(query);
    return rows;
  }

  static async findById(id) {
    const query = `
      SELECT 
        p.*,
        c.name AS category_name
      FROM products p
      LEFT JOIN categories c ON p.category_id = c.category_id
      WHERE p.product_id = $1 AND p.is_active = true;
    `;
    const { rows } = await db.query(query, [id]);
    return rows[0] || null;
  }

  // Add more methods later: findByCategory, search, etc.
}

module.exports = Product;