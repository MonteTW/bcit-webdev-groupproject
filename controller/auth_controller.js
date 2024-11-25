const passport = require("../middleware/passport");
let database = require("../models/userModel");

let authController = {
  login: (req, res) => {
    res.render("auth/login");
  },

  register: (req, res) => {
    res.render("auth/register");
  },

  loginSubmit: (req, res, next) => {
    passport.authenticate("local", { failureRedirect: '/auth/login', successRedirect: '/reminders'      
    })(req, res, next)
  },
  // loginSubmit: (req, res) => {
  //   console.log("req",req);
  // },


  registerSubmit: (req, res) => {
    // implement
  },
};

module.exports = authController;
