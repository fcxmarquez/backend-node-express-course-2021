const productsRouter = require('./products.router');
const ursersRouter = require('./users.router');
const categoriesRouter = require('./categories.router');


function routerApi(app)
{
  app.use('/products', productsRouter);
  app.use('/users', ursersRouter);
  app.use('/categories', categoriesRouter);
}

module.exports = routerApi;
