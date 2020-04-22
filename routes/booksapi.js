require("dotenv").config();
const express = require('express');
const axios = require('axios')
const router = express.Router();
// const Books = require('../models/book');
const key = require('../keys')

const countryName = "US"
const googleKey = key.google.key



router.get("/booksearch", (req, res) => {
    console.log("MAKING IT HERE")
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=`,
      { params: req.query }
        // key: googleKey,
        // country: countryName }
    ).then(res => console.log(res.data.items[0].volumeInfo))
    //   .then(({ data: { results } }) => res.json(results))
      .catch(err => console.log(err))
//   });
});




// router.get('/api/books', (req, res, next) => {
//     console.log("getting todos");
//     Books.find({}, 'action')
//     .then(data => res.json(data))
//     .catch(next)
// });

// router.post('/api/books', (req, res, next) => {
//     console.log("creating a todo");
//     console.log(req.body);
//     if(req.body.title){
//         Books.create(req.body)
//         .then(data => res.json(data))
//         .catch(next)
//     }
// });

// router.delete('/api/books/:id', (req, res, next) => {
//     console.log("just delete")
//     Books.deleteOne({"id":req.param.id})
//     .then(data =>res.json(data))
//     .catch(next)
// });

module.exports = router;