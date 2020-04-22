require("dotenv").config();
const axios = require('axios')
const router = require('express').Router();
// const Books = require('../models/book');
const key = require('../keys')

const countryName = "US"
const googleKey = key.google.key


router.get("/booksearch", (req, res) => {
  let query = req.query.q
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${googleKey}&country=${countryName}`

    // ).then(res => console.log(res.data))
      ).then(response => res.json(response.data))
      .catch(err => console.log(err))
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