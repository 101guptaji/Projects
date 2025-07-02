const express = require('express');
const Book = require('../models/Book');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    }
    catch (err) {
        res.status(500).json({ Error: `Error in getting books ${err}` });
    }
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const book = await Book.findById(id);
        if (!book) {
            return res.status(400).send("No book with " + id + " exists");
        }

        res.status(200).json(book);
    }
    catch (err) {
        res.status(500).json({ Error: `Error in getting book ${err}` });
    }
});

router.post('/', async (req, res) => {
    if (!req.body) {
        res.status(400).send("Send all data");
        return;
    }
    try {
        // title, author, price, genre, publishedDate, and createdByUser
        const book = new Book({
            title: req.body.title,
            author: req.body.author,
            price: req.body.price || 0,
            genre: req.body.genre || '',
            publishedDate: req.body.publishedDate,
            createdByUser: req.body.createdByUser
        })

        // console.log(book);
        const newBook = await book.save();
        res.status(201).json(newBook);
    } catch (error) {
        res.status(500).json("Error in saving book")
    }

})

router.put('/:id', async (req, res) => {
    if (!req.body) {
        res.status(400).send("Atleast one field is needed");
        return;
    }
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!updatedBook){
            return res.status(400).send("No book exists");
        }

        res.status(201).json(updatedBook);
    } catch (error) {
        res.status(500).json({ Error: `Error in updating book ${error}` })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id, {new: true});
        if(!deletedBook){
            return res.status(400).send("No book exists");
        }

        res.status(200).json({"Deleted book": deletedBook});
    } catch (error) {
        res.status(500).json({ Error: `Error in deleting book ${error}` })
    }
})


module.exports = router