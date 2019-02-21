const db = require('./db/connection');

const setup = function(app) {
  app.get('/api/items', function(req, res) {
    db.getConnection()
      .then(dbConnection => {
        return dbConnection.query('select * from items');
      })
      .then(([rows]) => {
        res.json(rows);
      });
  });

  app.post('/api/items', function(req, res) {
    const { name, price, imageUrl } = req.body;
    db.getConnection()
      .then(dbConnection => {
        return dbConnection.query(
          'INSERT INTO items (name, price, imageUrl) VALUES (?, ?, ?)',
          [name, price, imageUrl]);
      })
      .then(([results]) => {
        res.json(results);
      })
      .catch((err) => {
        res.status(400).send({ error: err.message });
      });
  });
};

module.exports = setup;
