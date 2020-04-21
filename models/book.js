const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    book: {
        title: {
            type: String,
            required: true,
            unique: true

        },
        authors: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        image: {
            type: String,
        },
        link: {
            type: String,
            required: true
        }
    }
})

const Book = mongoose.model('book', BookSchema);

module.exports = Book;