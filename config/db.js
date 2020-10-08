
const mongoose = require('mongoose');
require('dotenv').config();

const dbURI =process.env.DB_URI
// MongoDB Atlas
module.exports = () => {
    mongoose.connect(dbURI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
        .then(() => console.log("Connected to MongoDB"))
        .catch((err) => console.log("Error Connecting to DB"));
}

// Local Mongo Installation

//module.exports = () => {
//     mongoose.connect('mongodb://localhost/bookmyshow', {
//         useUnifiedTopology: true,
//         useNewUrlParser: true
//     })
//         .then(() => console.log("Connected to MongoDB"))
//         .catch((err) => console.log("Error Connecting to DB"));
// }