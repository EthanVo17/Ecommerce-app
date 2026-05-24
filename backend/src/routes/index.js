const authRoutes = require('./authRoute');
const productRoutes = require('./productRoute');
const categoryRoutes = require('./categoryRoute');
const cloudinaryRoutes = require('./cloudinaryRoute');

function route(app) {
  app.get('/', (req, res) => {
    res.send('Welcome to the E-commerce  API');
  });

  app.use('/api/auth', authRoutes);
  app.use('/api/products', productRoutes);

  app.use('/api/categories', categoryRoutes);

  app.use('/api/cloudinary', cloudinaryRoutes);
}

module.exports = route;
