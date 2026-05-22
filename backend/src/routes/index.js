const authRoutes = require('./authRoute');
const productRoutes = require('./productRoute');

function route(app) {
  app.get('/', (req, res) => {
    res.send('Welcome to the E-commerce  API');
  });

  app.use('/api/auth', authRoutes);
  app.use('/api/products', productRoutes);
}

module.exports = route;
