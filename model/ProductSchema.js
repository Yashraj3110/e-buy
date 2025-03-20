const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    Product_Category: { type: String, required: true },
    Product_SubCat: { type: String, required: true },
    Product_Name: { type: String, required: true },
    Product_Desc: { type: String },
    Product_DetailDesc: { type: String },
    Product_Image_Path: { type: String }, // Path or URL to the uploaded image
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);