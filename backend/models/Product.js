const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    type: { type: String, enum: ['image', 'video'], default: 'image' },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    img: { type: String, required: true },
    video: { type: String },
    tag: { type: String },
    category: { type: String, required: true },
    desc: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);