const mongoose = require('mongoose'),
      Upc = mongoose.model('Upc');

exports.findUpc = function(req, res) {
  if(req.query.upc){
    Upc.findOne(req.query, function(err, upc) {
      if(err){
        res.send(err);
      }
      res.json(upc);
    });
  } else {
    Upc.find({}, function(err, upcs){
      if(err){
        res.send(err)
      }
      var upcsClean = upcs.map((item) => {
          return {
            product_name: item.product_name,
            upc: item.upc
          }
        }
      );
      res.json(upcsClean);
    });
  }
};

exports.addUpc = function(req,res) {
  var new_task = new Upc(req.body);
  new_task.save(function(err, upc) {
    if(err)
      res.send(err);
    res.json(upc);
  });
};

exports.removeUpc = function(req,res) {
  Upc.findOneAndRemove(req.query, function(err, upc){
    if (err)
      res.send(err);
    if(upc){
      res.json({ message: 'UPC successfully deleted' })
    } else {
      res.json({ message: 'UPC not found'})
    };
  })
};
