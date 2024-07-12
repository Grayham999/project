const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bookRoute = require("./routes/booksRoutes");
require("./connection/conn")
app.use(cors());
mongoose.connect("mongodb+srv://nnajioke0708:onXtHPmtafAfgwql@cluster999.v1ukgx4.mongodb.net/")
    .then(() =>console.log("Successfully connected"))
    .catch((err) => console.log(err));

app.use(express.json());
app.use("/api/v1", bookRoute);

app.listen(1000, () => {
    console.log("SERVER STARTED")
});

