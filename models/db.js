// Create connection details for the database
// master js
const mongoose = require('mongoose');
const dbURI = process.env.dbURI || "mongodb+srv://adminUser:team996@appcluster-owus8.mongodb.net/test?retryWrites=true&w=majority";

const options = {
    useNewUrlParser: true,
    dbName: "Bloodlines"
};

// Connect to the MongoDB database
mongoose.connect(dbURI, options).then(() => {
    console.log('Database connection established.');
},
err => {
    console.log('Error connecting to database due to: ', err);
});

mongoose.set('useFindAndModify', false);

// This is where you require shemma
require('./artifact.js');
require('./family.js');
require('./users.js');
