const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const pool = require('./db');
const verifyToken = require('./authMiddleware');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/translations/:lang', async (req, res) => {
  const { lang } = req.params;
  try {
    const result = await pool.query(
      'SELECT key_code, content FROM translations WHERE lang_code = $1',
      [lang]
    );
    const dictionary = {};
    result.rows.forEach(row => {
      dictionary[row.key_code] = row.content;
    });
    res.json(dictionary);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const userRes = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    const user = userRes.rows[0];

    if (user && user.password === password) {
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '2h' });
      res.json({ token, username: user.username });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/products', verifyToken, async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products ORDER BY id ASC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.patch('/api/products/:id', verifyToken, async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    
    const keys = Object.keys(updates);
    const values = Object.values(updates);
    const setQuery = keys.map((key, i) => `${key} = $${i + 1}`).join(', ');

    try {
        await pool.query(
            `UPDATE products SET ${setQuery} WHERE id = $${keys.length + 1}`,
            [...values, id]
        );
        res.json({ message: 'Product updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));