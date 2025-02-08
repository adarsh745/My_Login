const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://adarshjanjirala745:adarsh2003@cluster0.xeuda.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log('Error connecting to MongoDB:', err);
  });

// Define the schema for the login
const loginschema = new mongoose.Schema({
  name:{
    type: String,
    required: true // Corrected the typo from "requred" to "required"
  },
  password:{
    type: String,
    required: true // Corrected the typo from "requered" to "required"
  }
});

// Create a model based on the schema
const collection = mongoose.model('User_Login', loginschema);

// Export the model to use it in other parts of your application
module.exports = collection;
