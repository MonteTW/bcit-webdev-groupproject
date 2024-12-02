const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const userController = require("../controller/userController.js");
const localLogin = new LocalStrategy(
  {
    // these variables will receive the username and password sent from the login page on the browser
    usernameField: "email",
    passwordField: "password",
  },
  (email, password, done) => {
    console.log("hi")
    // returns a user if the credentials match
    // done is a special callback function that passport gives us
    // call done if you have a user, or call done but pass in false
    // aka you'll either get a user back, or you will get a null value
    const user = userController.getUserByEmailIdAndPassword(email, password);
    return user
    // if you get a user back, tell passport via done() and the user and it'll create a session
    // first parameter is for displaying database-level errors, but we aren't using a database right now so we can leave it as null
    // at this moment, we only care about the second parameter
    // if user is given, redirect to dashboard
      ? done(null, user)
    // if you can't get the user back, then second parameter is false
    // if user is not given, redirect to login
      : done(null, false, {
          message: "Your login details are not valid. Please try again",
        });
  }
);
passport.use(localLogin);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
  }
);

module.exports = passport