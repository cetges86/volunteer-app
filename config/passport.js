const db = require("../models");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use('local', new LocalStrategy(
    {
        usernameField: "email",
        passwordField: 'password'
    },
    function (email, password, done) {
        db.User.findOne({ email: email },
            function (err, user) {
                if (err) { return done(err); }
                if (!user) {
                    return done(null, false, { message: "Email address not found" });
                }
                if (!user.validPassword(password)) {
                    return done(null, false, { message: 'Incorrect Password' });
                }
                return done(null, user);
            });
    }
));

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

module.exports = passport;