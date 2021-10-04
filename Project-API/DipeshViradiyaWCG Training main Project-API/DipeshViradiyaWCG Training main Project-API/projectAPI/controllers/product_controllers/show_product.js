const product_model = require("../../models/product_model");
const category_model = require("../../models/category_model");


// exports.show_products_get = function(req, res, next){
//     product_model.find().lean().then((data) => {
//         res.render('index', {productdata : data});
//     }).catch((err) => {
//         throw err;
//     });
// };

exports.show_products_get = function(req, res, next){
    console.log("in show");
    product_model.find().lean().then((data) => {
        console.log("test 1");
        category_model.find().lean().then((category_data) => {
            console.log("test 2");
            console.log(category_data);
            // console.log("category_data     =>     "+ category_data);
            res.render('index', {productdata : data, categories : category_data});
        }).catch((err) => {
            throw err;
        });
    }).catch((err) => {
        throw err;
    });
};

exports.show_product_get = function(req, res, next){
    console.log("in show");
    product_model.findOne({_id : req.params.id}).lean().then((data) => {
        console.log("test 1");
        res.render('product', {productdata : data});
    }).catch((err) => {
        throw err;
    });
};

exports.show_products_get_all = function(req, res, next){
    console.log("in show");
    product_model.find().lean().then((data) => {
        console.log("test 1");
        category_model.find().lean().then((category_data) => {
            console.log("test 2");
            console.log(category_data);
            // console.log("category_data     =>     "+ category_data);
            res.render('products', {productdata : data, categories : category_data});
        }).catch((err) => {
            throw err;
        });
    }).catch((err) => {
        throw err;
    });
};

exports.show_products_by_category = function (req, res, next) {
    console.log(req.params.category);
    product_model.find({product_category : req.params.category}).lean().then((data) => {
        category_model.find().lean().then((category_data) => {
            console.log("category_data     =>     "+ category_data);
            console.log(data);
            res.render('products', {productdata : data, categories : category_data});
        }).catch((err) => {
            throw err;
        });
    }).catch((err) => {
        throw err;
    });
};
