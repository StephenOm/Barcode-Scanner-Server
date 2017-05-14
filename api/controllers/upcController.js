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
  Upc.findOne(req.body, function(err, upc) {
    if (err)
      res.send(err);
    if(upc){
      Upc.remove({_id: upc._id}, function (err) {
        if (err) res.send(err);
        else {
          res.json({ message: 'UPC successfully deleted' });
        }
      });
    } else {
      res.json({ message: 'UPC not found' });
    }
  });
};
