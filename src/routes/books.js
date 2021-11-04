const express = require('express');
const router = express.Router();

// These routes serves books

let books = [
    {
        title: 'Medicina Vibracional: Uma Medicina Para O Futuro',
        author: 'Richard Gerber',
        publisher: 'Cultrix',
        pages: 464
    },
];

// Check if the Book title is inside Body

function checkBookExists (req, res, next) {
    if (!req.body.title || !req.body.author || !req.body.publisher || !req.body.pages) {
    return res.status(400).json({ error: 'I dont accept empty fields' });   
    }
    return next(); 
}

// Check if the Book id exists in my array

function checkBookInArray(req, res, next) {
    const book = books[req.params.id];
    if (!book) {
        return res.status(404).json({ error: 'Book does not exists' });
    } 
    req.book = book;
    return next();
}

// Starting Endpoint routing

router.get ('/', (req,res) => {
    res.status(200).send({  message: 'Welcome, we have these Books with us: ', books });
});

router.get ('/:id', checkBookInArray, (req,res) => {
    const { id } = req.params;
    const book = books[id];

    res.status(200).send({ book });
});

router.post('/', checkBookExists, (req, res) => {
    const title = req.body;
    books.push(title);

    res.status(200).json({ message: 'Book successfully created!', details: books, redirect: '/books/' });
});

router.put("/:id", checkBookInArray, checkBookExists, (req, res) => {
    const { id } = req.params;
    books[id] = req.body;

    res.status(200).json({ message: `Book ${books[id].title} from ${books[id].author} successfully modified!`, details: books[id], redirect: '/books/:id' });
});

router.delete('/:id', checkBookInArray, (req, res) => {
    const { id } = req.params;
    books.splice(id, 1);

    res.status(200).send({ message: 'Book Successfully Deleted!', redirect: '/books/' });
});

module.exports = router;