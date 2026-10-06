const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    items: [{
        id: String,
        name: String,
        price: Number,
        img: String,
        size: String,
        qty: Number
    }],
    subtotal: { type: Number, required: true },
    customer: {
        name: String,
        email: String,
        phone: String,
        address: String
    },
    status: { type: String, default: 'Order Confirmed' }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);