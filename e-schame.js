// models.js

const mongoose = require('mongoose');

// User Schema
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  firstName: String,
  lastName: String,
  // ... other user-related fields
});

const User = mongoose.model('User', userSchema);

// Product Schema
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  stockQuantity: Number,
  // ... other product-related fields
});

const Product = mongoose.model('Product', productSchema);

// Category Schema
const categorySchema = new mongoose.Schema({
  name: String,
  description: String,
  // ... other category-related fields
});

const Category = mongoose.model('Category', categorySchema);

// Order Schema
const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  orderDate: { type: Date, default: Date.now },
  totalAmount: Number,
  // ... other order-related fields
});

const Order = mongoose.model('Order', orderSchema);

// OrderDetail Schema
const orderDetailSchema = new mongoose.Schema({
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' },
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  quantity: Number,
  unitPrice: Number,
  subtotal: Number,
  // ... other order detail-related fields
});

const OrderDetail = mongoose.model('OrderDetail', orderDetailSchema);

module.exports = { User, Product, Category, Order, OrderDetail };
