var mongoose = require("mongoose");
var bcrypt = require('bcrypt-nodejs');

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var UserSchema = new Schema({
    // `title` is required and of type String
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required:true,
        unique:true
    },
    role: {
        type:String,
        required:true
    },
    grade: {
        type: String
    },
    photo: {
        type: String
    }
});

UserSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

UserSchema.pre("save", function (next) {
    var user = this;
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    next();
});



// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", UserSchema);

// Export the User model
module.exports = User;