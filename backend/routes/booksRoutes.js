const router = require("express").Router();
const BooksModels = require("../models/BooksModels");
const bookModel = require("../models/BooksModels");

//Post request
router.post("/add", async (req, res) => {
    try {
        const newBook = new bookModel(req.body);
        await newBook.save().then(() => {
            res.status(200).json({message: "Book saved successfully"});
        });
    } catch (err) {
        console.log(err);
    }
});


//GET REQUEST
router.get("/getBooks", async (req, res) => {
    let books;
    try {
        books= await bookModel.find();
        res.status(200).json({books})
        } catch (error) {
        console.log(err);
        }
});

//GET REQUEST BY ID
router.get("/getBooks/:id", async (req, res) => {
    let book;
    const id = req.params.id;
    try {
       book= await bookModel.findById(id);
       res.status(200).json({book});
    } catch (error) {
        console.log(err);
    }
})

//Update books by id
router.put("/updateBooks/:id", async (req, res) => {
    const id = req.params.id;
    const {bookname,description,author,image,price} = req.body;
    let book;
    try {
      book = await bookModel.findByIdAndUpdate(id,{
        bookname,
        description,
        author,
        image,
        price});
        await book
        .save()
        .then(() => res.send(200).json({message: "Data Updated"}));
    } catch (error) {
        console.error(error);
    }
})

//DELETE BOOK BY ID
router.delete("/deleteBook/:id", async (req, res) => {
 const id = req.params.id;
 try {
    await bookModel.findByIdAndDelete(id).then(() => res.staus(201).json({message: "Deleted successfully"}));
 } catch (error) {
    console.error(error);
 }   
})

module.exports = router;