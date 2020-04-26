import axios from "axios";

// The getBooks method retrieves books from the server
// It accepts a "query" or term to search the book api for
export default {
  getBooks: function(query) {
    console.log(query)
    console.log('made it back to the export')
    return axios.get("/api/booksearch", { params: { q: query } });
  },

  getSaved: function() {
    console.log('made it here')
    return axios.get("api/saved")
  },

  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/saved/" + id);
  },

  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/saved", bookData);
  }
};