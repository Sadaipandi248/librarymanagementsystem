const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 4000;
const mongoose = require('mongoose');
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect("mongodb://localhost:27017/LibraryDB", { useNewUrlParser: true }).then(()=>console.log("mongoDB connect"))
.catch((err)=>console.log(err))
app.use(bodyParser.json());

const AdminSchema = new mongoose.Schema({
  email: String,
  password: String,
  name:String,
});

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  isbn: String,
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("USer", UserSchema);
const Book = mongoose.model('Book', BookSchema);


// Add this route to fetch books
app.get('/books', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});



app.post('/Adminregister', (req, res) => {
  const newAdmin = new Admin({
    name:req.body.name,
    email: req.body.email,
    password: req.body.password
  });

  newAdmin.save()
    .then(savedadmin => {
      console.log("Admin:", savedadmin);
      res.status(201).json(savedadmin);
    })
    .catch(err => {
      console.log("Error saving Doctor:", err);
      res.status(500).send("Error saving Doctor.");
    });
});

app.post('/Userregister', (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password:req.body.password,
  });

  newUser.save()
    .then(saveduser => {
        console.log("User ", saveduser);
       res.status(201).json(saveduser)
    })
    .catch(err => {
      console.log("Error saving Patient:", err);
      res.status(500).send("Error saving Patient.");
    });
});

app.post('/addBook', async (req, res) => {
  try {
    const { title, author, isbn } = req.body;

    // Create a new book document
    const newBook = new Book({ title, author, isbn });

    // Save the book to the database
    await newBook.save();

    res.status(201).json({ message: 'Book added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});


app.listen(port, () => {
  console.log(`Server started at port ${port}!`);
});
