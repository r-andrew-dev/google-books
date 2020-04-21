const express = require('express');
const router = express.Router();
const Books = require('../models/book');

router.get('/api/books', (req, res, next) => {
    console.log("getting todos");
    Books.find({}, 'action')
    .then(data => res.json(data))
    .catch(next)
});

router.post('/api/books', (req, res, next) => {
    console.log("creating a todo");
    console.log(req.body);
    if(req.body.title){
        Books.create(req.body)
        .then(data => res.json(data))
        .catch(next)
    }
});

router.delete('/api/books/:id', (req, res, next) => {
    console.log("just delete")
    Books.deleteOne({"id":req.param.id})
    .then(data =>res.json(data))
    .catch(next)
});

module.exports = router;