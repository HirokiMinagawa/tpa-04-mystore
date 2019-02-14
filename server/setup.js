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
    const { name, price, image_url } = req.body;
    db.getConnection()
      .then(dbConnection => {
        return dbConnection.query(
          'INSERT INTO items (name, price, image_url) VALUES (?, ?, ?)',
          [name, price, image_url]);
      })
      .then(([results]) => {
        res.json(results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
};

module.exports = setup;
