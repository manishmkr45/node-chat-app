const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");

const url = "mongodb+srv://manish123:manish123@cluster0-bz1wp.mongodb.net/test?retryWrites=true&w=majority";

const connect = mongoose.connect(url, 
    {
         useNewUrlParser: true,
        useUnifiedTopology: true 
    });

module.exports = connect;
