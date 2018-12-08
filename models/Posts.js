var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var PostSchema = new Schema({
 
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  peopleNeeded: {
      type: Number,
      required:false
  },
  description: {
    type: String,
    required:false
  }
});

// This creates our model from the above schema, using mongoose's model method
var Posts = mongoose.model("Posts", PostSchema);

module.exports = Posts;
