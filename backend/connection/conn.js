const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://nnajioke0708:onXtHPmtafAfgwql@cluster999.v1ukgx4.mongodb.net/")
    .then(() =>console.log("Successfully connected"))
    .catch((err) => console.log(err));

