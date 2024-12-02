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
  admin: (req, res) => {
    req.sessionStore.all((err, sessions)=> {
      if (err) {
        console.log(err)
      } else {
        res.render("auth/admin", {
          user: req.user,
          sessions
        })
      }
    })
  },
  revoke: (req, res) => {
    const revokeId = req.body.sessionId
    console.log(revokeId)
    req.sessionStore.destroy(revokeId, (err,any) => {})
    res.redirect('/admin')
  },
  // loginSubmit: (req, res) => {
  //   console.log("req",req);
  // },


  registerSubmit: (req, res) => {
    // implement
  },
};

module.exports = authController;
