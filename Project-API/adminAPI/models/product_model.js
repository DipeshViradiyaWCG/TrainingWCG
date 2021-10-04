const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    product_name : String,
    // product_category : String,
    price : Number,
    product_desc : String,
    product_img : String,
    gender_ref : String,
    product_category : {
        type : Schema.Types.ObjectId,
        ref : 'categories'
    }

});

module.exports = mongoose.model("productapi", productSchema);