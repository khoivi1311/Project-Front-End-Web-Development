const db = require('../databases/connectDB');

var Product = function (Product) {
    this.Product_Id = Product.Product_Id;
    this.Product_Name = Product.Product_Name;
    this.Brand = Product.Brand;
    this.Type = Product.Type;
    this.Color = Product.Color;
    this.Ram = Product.Ram;
    this.Memory = Product.Memory;
    this.Price = Product.Price;
    this.Warranty = Product.Warranty;
    this.Quantity = Product.Quantity;
    this.Status = Product.Status;
}

//Get
Product.getProduct = function (result) {
    db.query('SELECT * FROM Products', function (err, product) {
        if (err) {
            result(err);
        }
        else {
            result(product);
        }
    });
}

//Post
Product.postProduct = function (data, result) {
    db.query('INSERT INTO Products SET ?', data, function (err, product) {
        if (err) {
            result(null);
        }
        else {
            result({ Product_Id: product.insertProduct_Id, ...data });
        }
    });
}

//Put
Product.putProduct = function (data, id, result) {
    db.query('UPDATE Products SET ? WHERE Product_Id = ?', [data, id], function (err, product) {
        if (err) {
            result(null);
        }
        else {
            result({ Product_Id: product.insertProduct_Id, ...data });
        }
    });
}

//Delete by id
Product.deleteProduct = function (id, result) {
    db.query('DELETE FROM Products WHERE Product_Id = ?', id, function (err) {
        if (err) {
            result(err);
        }
        else {
            result('Delete product has id: ' + id + ' successful');
        }
    });
}

module.exports = Product;