const express = require("express");
const mongoose = require('mongoose')
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require('./routes/booksapi')

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googleBooks";

mongoose.connect(
  MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }).then(() => console.log('DB Connected!'))
.catch(err => {
  console.log(`DB Connection Error: ${err.message}`)
})


app.use("/api", routes);
// Define any API routes before this runs

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});