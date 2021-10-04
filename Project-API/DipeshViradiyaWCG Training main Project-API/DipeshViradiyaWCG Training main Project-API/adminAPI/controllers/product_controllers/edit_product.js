const product_model = require("../../models/product_model");

//Read product

exports.edit_product_get = function (req, res, next) {
    product_model.findById(req.params.id).lean().then((data) => {
        // console.log(data);
        res.render('product-views/edit-product', {productdata : data});
        
    }).catch((err) => {
        throw err;
    });
};

exports.edit_product_post = function(req, res, next){
    var fileobj = req.files.productimg;
    product_model.findByIdAndUpdate(req.params.id, {
    
        product_name : req.body.productname,
        product_category : req.body.productcategory,
        price : req.body.price,
        product_desc : req.body.productdesc,
        product_img : fileobj.name
    
    }).then((data) => {
        // console.log(data);
        fileobj.mv('public/images/'+fileobj.name, function (err) {
            if (err)
                return res.send("File not uploaded...public");
            fileobj.mv('/home/webcodegenie/Documents/WCG dipesh/Training 2021 codes/Aug - Sept/Training/Project-API/projectAPI/public/images/'+fileobj.name, function (err) {
                if (err)
                    return res.send("File not uploaded...data");
            });
        });
        res.redirect('/show-products');
    }).catch((err) => {
        throw err;
    });
};