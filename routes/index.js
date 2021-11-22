const productsRouter = require('./products.router');
const ursersRouter = require('./users.router');
const categoriesRouter = require('./categories.router');


function routerApi(app)
{
  app.use('/api/products', productsRouter);
  app.use('/api/users', ursersRouter);
  app.use('/api/categories', categoriesRouter);
}

module.exports = routerApi;
