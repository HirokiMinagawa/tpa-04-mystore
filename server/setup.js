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
};

module.exports = setup;
