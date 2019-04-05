var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var PostSchema = new Schema({
  author: {
    type:String,
    require:true
  },
  title: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  peopleNeeded: {
      type: Number,
      required:false
  },
  description: {
    type: String,
    required:false
  },
  volunteers: {
    type: Array,
    "default":[]
  }
});

// This creates our model from the above schema, using mongoose's model method
var Posts = mongoose.model("Posts", PostSchema);

module.exports = Posts;
