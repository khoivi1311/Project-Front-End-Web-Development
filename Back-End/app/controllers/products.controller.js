var Product = require('../models/products.model');

//get method
exports.getProduct = function(req, res) {
    Product.getProduct(function(data) {
        res.send(data);
    });
}

//post method
exports.postProduct = function(req, res) {
    var data = req.body;
    Product.postProduct(data, function (response) {
        res.send([response]);
    });
}

//delete method
exports.deleteProduct = function(req, res) {
    var id = req.params.id;
    Product.deleteProduct(id, function(response) {
        res.send([response]);
    });
}

//put method
exports.putProduct = function(req, res) {
    var data = req.body;
    var id = req.params.id;
    Product.putProduct(data, id, function (response) {
        res.send([response]);
    });
}