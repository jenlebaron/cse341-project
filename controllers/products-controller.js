const Product = require('../models/products-model');

//handle ta03
exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
    res.render('pages/ta03', {
        prods: products, 
        title: 'Products', 
        path: '/ta03'
      });
  });
};

// handle ta03/search
exports.getSearchProducts = (req, res, next) => {
  const query = req.query.query.toLowerCase();
  Product.search(query, (filteredProducts) => {
    res.render('pages/ta03', {
      title: 'Products',
      path: '/ta03',
      prods: filteredProducts,
    });
  });
};