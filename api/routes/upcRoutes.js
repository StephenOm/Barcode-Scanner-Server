module.exports = function(app) {
  var upc = require('../controllers/upcController');

  app.route('/upc')
    .get(upc.findUpc)
    .post(upc.addUpc)
    .delete(upc.removeUpc);
}
