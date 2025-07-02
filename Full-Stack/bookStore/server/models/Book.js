// title, author, price, genre, publishedDate, and createdByUser
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {type: String, require: true},
    author: {type: String, require: true},
    price: {type: Number, min: 0, require: true},
    genre: String,
    publishedDate: {type: Date, default: new Date()},
    createdByUser: {type: String, require: true},
}, {timestamps: true});

module.exports = mongoose.model("books", bookSchema);
