// models/user.js
const db = require('./db');
const bcrypt = require('bcrypt');

class User {
  static async findByEmail(email) {
    const { rows } = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    return rows[0];
  }

  static async create(email, password, role = 'customer') {
    const hash = await bcrypt.hash(password, 10);
    const { rows } = await db.query(
      'INSERT INTO users (email, password_hash, role) VALUES ($1, $2, $3) RETURNING *',
      [email, hash, role]
    );
    return rows[0];
  }

  // Add findById, findByGoogleId, etc.
}

module.exports = User;