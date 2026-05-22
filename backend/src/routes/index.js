const authRoutes = require('./auth');

function route(app) {
  app.get('/', (req, res) => {
    res.send('Welcome to the E-commerce  API');
  });

  app.use('/api/auth', authRoutes);
}

module.exports = route;
